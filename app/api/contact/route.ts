import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Rate Limiting ساده (in-memory)
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT = 3; // 3 request در هر بازه
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 ساعت

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];

  // پاک کردن timestamps قدیمی
  const recentTimestamps = timestamps.filter(
    (t) => now - t < RATE_LIMIT_WINDOW,
  );

  if (recentTimestamps.length >= RATE_LIMIT) {
    return true;
  }

  recentTimestamps.push(now);
  rateLimitMap.set(ip, recentTimestamps);
  return false;
}

// Validation
function validateInput(data: {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}): { valid: boolean; error?: string } {
  if (!data.name || data.name.trim().length < 2) {
    return { valid: false, error: "نام باید حداقل 2 کاراکتر باشد" };
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return { valid: false, error: "ایمیل معتبر نیست" };
  }

  if (!data.subject || data.subject.trim().length < 3) {
    return { valid: false, error: "موضوع باید حداقل 3 کاراکتر باشد" };
  }

  if (!data.message || data.message.trim().length < 10) {
    return { valid: false, error: "پیام باید حداقل 10 کاراکتر باشد" };
  }

  return { valid: true };
}

export async function POST(request: NextRequest) {
  try {
    // Rate Limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0] ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "تعداد درخواست‌های شما زیاد است. لطفاً بعداً امتحان کنید." },
        { status: 429 },
      );
    }

    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validation
    const validation = validateInput({ name, email, subject, message });
    if (!validation.valid) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    // ارسال ایمیل با Resend
    const { data, error } = await resend.emails.send({
      from: `Portfolio Contact <${process.env.FROM_EMAIL}>`,
      to: [process.env.CONTACT_EMAIL!],
      replyTo: email,
      subject: `📩 پیام جدید: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html dir="rtl" lang="fa">
        <head>
          <meta charset="UTF-8">
          <title>پیام جدید</title>
        </head>
        <body style="margin:0;padding:0;font-family:Tahoma,Arial,sans-serif;background:#f4f4f5;">
          <div style="max-width:600px;margin:40px auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);">
            
            <!-- Header -->
            <div style="background:linear-gradient(135deg,#3b82f6 0%,#8b5cf6 100%);padding:40px 30px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:bold;">
                📩 پیام جدید از سایت
              </h1>
              <p style="margin:8px 0 0;color:rgba(255,255,255,0.9);font-size:14px;">
                Portfolio Contact Form
              </p>
            </div>
            
            <!-- Body -->
            <div style="padding:40px 30px;">
              
              <!-- Info Rows -->
              <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #e4e4e7;">
                    <div style="color:#71717a;font-size:12px;margin-bottom:4px;">فرستنده</div>
                    <div style="color:#18181b;font-size:16px;font-weight:600;">${name}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #e4e4e7;">
                    <div style="color:#71717a;font-size:12px;margin-bottom:4px;">ایمیل</div>
                    <div style="color:#3b82f6;font-size:16px;font-weight:600;direction:ltr;text-align:right;">
                      <a href="mailto:${email}" style="color:#3b82f6;text-decoration:none;">${email}</a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #e4e4e7;">
                    <div style="color:#71717a;font-size:12px;margin-bottom:4px;">موضوع</div>
                    <div style="color:#18181b;font-size:16px;font-weight:600;">${subject}</div>
                  </td>
                </tr>
              </table>
              
              <!-- Message -->
              <div style="background:#fafafa;border-right:4px solid #3b82f6;border-radius:8px;padding:20px;">
                <div style="color:#71717a;font-size:12px;margin-bottom:8px;">متن پیام</div>
                <div style="color:#18181b;font-size:15px;line-height:1.8;white-space:pre-wrap;">${message}</div>
              </div>
              
              <!-- CTA -->
              <div style="margin-top:32px;text-align:center;">
                <a href="mailto:${email}?subject=Re: ${subject}" 
                   style="display:inline-block;background:linear-gradient(135deg,#3b82f6 0%,#8b5cf6 100%);color:#ffffff;text-decoration:none;padding:14px 32px;border-radius:999px;font-weight:600;font-size:14px;">
                  پاسخ به ${name}
                </a>
              </div>
              
            </div>
            
            <!-- Footer -->
            <div style="background:#fafafa;padding:20px 30px;text-align:center;border-top:1px solid #e4e4e7;">
              <p style="margin:0;color:#71717a;font-size:12px;">
                این پیام از فرم تماس سایت رزومه شما ارسال شده است
              </p>
              <p style="margin:8px 0 0;color:#a1a1aa;font-size:11px;">
                ${new Date().toLocaleString("fa-IR")}
              </p>
            </div>
            
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json(
        { error: "خطا در ارسال ایمیل. لطفاً بعداً امتحان کنید." },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { success: true, message: "پیام شما با موفقیت ارسال شد", data },
      { status: 200 },
    );
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "خطای سرور. لطفاً بعداً امتحان کنید." },
      { status: 500 },
    );
  }
}
