"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";

export default function HeroCanvas() {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;

        // ── Scene setup ──────────────────────────────────────────────────────
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            60,
            mount.clientWidth / mount.clientHeight,
            0.1,
            100,
        );
        camera.position.z = 7;

        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });
        renderer.setSize(mount.clientWidth, mount.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0);
        mount.appendChild(renderer.domElement);

        // ── Lighting ─────────────────────────────────────────────────────────
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.15);
        scene.add(ambientLight);

        const pointLight1 = new THREE.PointLight(0x00c8ff, 3.5);
        pointLight1.position.set(4, 3, -2);
        scene.add(pointLight1);

        const pointLight2 = new THREE.PointLight(0x0057ff, 2.0);
        pointLight2.position.set(-4, -2, 2);
        scene.add(pointLight2);

        const rimLight = new THREE.PointLight(0xffffff, 0.5);
        rimLight.position.set(0, 5, 3);
        scene.add(rimLight);

        // ── Group (all shapes) ───────────────────────────────────────────────
        const group = new THREE.Group();
        scene.add(group);

        // 1. Central Icosahedron
        const icoGeo = new THREE.IcosahedronGeometry(1.6, 1);
        const icoMat = new THREE.MeshStandardMaterial({
            color: 0x00c8ff,
            metalness: 0.7,
            roughness: 0.15,
            transparent: true,
            opacity: 0.75,
        });
        const ico = new THREE.Mesh(icoGeo, icoMat);
        group.add(ico);

        // Wireframe overlay
        const wireGeo = new THREE.WireframeGeometry(icoGeo);
        const wireMat = new THREE.LineBasicMaterial({
            color: 0x00c8ff,
            transparent: true,
            opacity: 0.18,
        });
        const wireframe = new THREE.LineSegments(wireGeo, wireMat);
        group.add(wireframe);

        // 2. Torus ring 1
        const torus1Geo = new THREE.TorusGeometry(2.4, 0.06, 12, 64);
        const torus1Mat = new THREE.MeshStandardMaterial({
            color: 0x0057ff,
            metalness: 0.6,
            roughness: 0.2,
            transparent: true,
            opacity: 0.6,
        });
        const torus1 = new THREE.Mesh(torus1Geo, torus1Mat);
        torus1.rotation.x = Math.PI / 3;
        group.add(torus1);

        // 3. Torus ring 2
        const torus2Geo = new THREE.TorusGeometry(1.35, 0.03, 8, 64);
        const torus2Mat = new THREE.MeshStandardMaterial({
            color: 0x00c8ff,
            metalness: 0.5,
            roughness: 0.3,
            transparent: true,
            opacity: 0.3,
        });
        const torus2 = new THREE.Mesh(torus2Geo, torus2Mat);
        torus2.rotation.x = Math.PI / 2;
        group.add(torus2);

        // 4. Floating cubes
        const cubeData = [
            {
                size: 0.2,
                pos: [2.4, 1.2, 0.5],
                color: 0x00c8ff,
                phase: 0.0,
                speed: 0.9,
            },
            {
                size: 0.14,
                pos: [-2.2, 0.8, 1.0],
                color: 0x0057ff,
                phase: 1.0,
                speed: 1.1,
            },
            {
                size: 0.28,
                pos: [1.8, -1.6, -0.5],
                color: 0x00c8ff,
                phase: 2.0,
                speed: 0.7,
            },
            {
                size: 0.16,
                pos: [-1.6, -1.4, 0.8],
                color: 0x0057ff,
                phase: 0.5,
                speed: 1.3,
            },
            {
                size: 0.22,
                pos: [0.4, 2.2, -1.2],
                color: 0x00c8ff,
                phase: 1.5,
                speed: 0.8,
            },
        ] as const;

        const cubes: {
            mesh: THREE.Mesh;
            phase: number;
            speed: number;
            baseY: number;
        }[] = [];
        cubeData.forEach(({ size, pos, color, phase, speed }) => {
            const geo = new THREE.BoxGeometry(size, size, size);
            const mat = new THREE.MeshStandardMaterial({
                color,
                metalness: 0.8,
                roughness: 0.1,
                transparent: true,
                opacity: 0.85,
            });
            const cube = new THREE.Mesh(geo, mat);
            cube.position.set(...(pos as [number, number, number]));
            cubes.push({ mesh: cube, phase, speed, baseY: pos[1] });
            group.add(cube);
        });

        // 5. Octahedra
        const octaData = [
            { pos: [-2.8, 0.6, -0.8] as [number, number, number] },
            { pos: [2.6, -0.8, 1.0] as [number, number, number] },
        ];
        octaData.forEach(({ pos }) => {
            const geo = new THREE.OctahedronGeometry(0.2, 0);
            const mat = new THREE.MeshStandardMaterial({
                color: 0x00c8ff,
                metalness: 0.7,
                roughness: 0.2,
                transparent: true,
                opacity: 0.7,
            });
            const mesh = new THREE.Mesh(geo, mat);
            mesh.position.set(...pos);
            group.add(mesh);
        });

        // ── Mouse tracking ───────────────────────────────────────────────────
        const mouse = { x: 0, y: 0 };
        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
        };
        window.addEventListener("mousemove", handleMouseMove);

        // ── Resize ───────────────────────────────────────────────────────────
        const handleResize = () => {
            if (!mount) return;
            camera.aspect = mount.clientWidth / mount.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(mount.clientWidth, mount.clientHeight);
        };
        window.addEventListener("resize", handleResize);

        // ── Animation loop ───────────────────────────────────────────────────
        let animId = 0;
        const timer = new THREE.Timer();

        const animate = () => {
            animId = requestAnimationFrame(animate);
            timer.update();
            const t = timer.getElapsed();

            // Core icosahedron rotation
            ico.rotation.x += 0.0012;
            ico.rotation.y += 0.0009;
            wireframe.rotation.x += 0.0012;
            wireframe.rotation.y += 0.0009;

            // Torus rotations
            torus1.rotation.z += 0.0015;
            torus2.rotation.z -= 0.0008;

            // Cube float
            cubes.forEach((c) => {
                c.mesh.position.y =
                    c.baseY + Math.sin(t * c.speed + c.phase) * 0.15;
                c.mesh.rotation.x += 0.008;
                c.mesh.rotation.y += 0.005;
            });

            // Breathing cyan light
            pointLight1.intensity = 3.0 + Math.sin(t * 0.8) * 0.8;

            // Mouse parallax — lerp
            group.rotation.y += (mouse.x * 0.18 - group.rotation.y) * 0.04;
            group.rotation.x += (-mouse.y * 0.12 - group.rotation.x) * 0.04;

            renderer.render(scene, camera);
        };

        animate();

        // ── Cleanup ──────────────────────────────────────────────────────────
        return () => {
            cancelAnimationFrame(animId);
            timer.dispose();
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", handleResize);
            renderer.dispose();
            if (mount.contains(renderer.domElement)) {
                mount.removeChild(renderer.domElement);
            }
            scene.traverse((obj) => {
                if (obj instanceof THREE.Mesh) {
                    obj.geometry.dispose();
                    if (Array.isArray(obj.material)) {
                        obj.material.forEach((m) => m.dispose());
                    } else {
                        obj.material.dispose();
                    }
                }
            });
        };
    }, []);

    return (
        <div
            ref={mountRef}
            className="absolute inset-0 w-full h-full"
            style={{ willChange: "transform" }}
        />
    );
}
