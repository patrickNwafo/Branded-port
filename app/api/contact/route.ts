import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
    ? new Resend(process.env.RESEND_API_KEY)
    : null;

function buildEmailHtml(name: string, email: string, message: string): string {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Portfolio Message</title>
</head>
<body style="margin:0;padding:0;background:#04080f;font-family:Inter,-apple-system,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#04080f;padding:48px 24px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">

          <!-- Header -->
          <tr>
            <td style="padding-bottom:32px;">
              <p style="margin:0;font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#00C8FF;">
                Chinedu Nwafor — Portfolio
              </p>
              <h1 style="margin:12px 0 0;font-size:28px;font-weight:700;color:#edf6ff;line-height:1.2;">
                New Message
              </h1>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding-bottom:28px;">
              <div style="height:1px;background:rgba(0,200,255,0.15);"></div>
            </td>
          </tr>

          <!-- From -->
          <tr>
            <td style="padding-bottom:24px;">
              <p style="margin:0 0 6px;font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#7a9bb5;">
                From
              </p>
              <p style="margin:0;font-size:16px;color:#edf6ff;font-weight:500;">
                ${name}
              </p>
              <p style="margin:4px 0 0;font-size:14px;color:#7a9bb5;">
                ${email}
              </p>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding-bottom:28px;">
              <div style="height:1px;background:rgba(0,200,255,0.08);"></div>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding-bottom:32px;">
              <p style="margin:0 0 12px;font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#7a9bb5;">
                Message
              </p>
              <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(0,200,255,0.12);border-radius:6px;padding:20px 24px;">
                <p style="margin:0;font-size:15px;color:#c8d8e8;line-height:1.75;white-space:pre-wrap;">${message}</p>
              </div>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding-bottom:24px;">
              <div style="height:1px;background:rgba(0,200,255,0.08);"></div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td>
              <p style="margin:0;font-family:'JetBrains Mono',monospace;font-size:11px;color:#3a5568;letter-spacing:0.1em;">
                Sent via chinedu-portfolio · Reply directly to ${email}
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(request: NextRequest) {
    if (!resend) {
        return NextResponse.json(
            { error: "Email service not configured" },
            { status: 503 },
        );
    }

    try {
        const body = await request.json();
        const { name, email, message } = body as {
            name: string;
            email: string;
            message: string;
        };

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Name, email, and message are required." },
                { status: 400 },
            );
        }

        const { error } = await resend.emails.send({
            // Replace with your verified Resend domain once set up:
            // e.g. "Portfolio <hello@yourdomain.com>"
            from: "Chinedu Portfolio <onboarding@resend.dev>",
            to: "patrickchinwafor@gmail.com",
            replyTo: email,
            subject: `New message from ${name} — Portfolio`,
            html: buildEmailHtml(name, email, message),
        });

        if (error) {
            console.error("[Resend error]", error);
            return NextResponse.json(
                { error: "Failed to send message. Please try again." },
                { status: 500 },
            );
        }

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("[Contact route error]", err);
        return NextResponse.json(
            { error: "Something went wrong. Please try again." },
            { status: 500 },
        );
    }
}
