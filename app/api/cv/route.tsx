import { NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import ResumePDF from "@/app/lib/pdf/ResumePDF";

export async function GET() {
  try {
    const buffer = await renderToBuffer(<ResumePDF />);

    return new NextResponse(buffer as BodyInit, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Chinedu_Nwafor_Resume.pdf"',
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (err) {
    console.error("[CV generation error]", err);
    return NextResponse.json(
      { error: "Failed to generate resume PDF" },
      { status: 500 }
    );
  }
}
