
import { Resend } from "resend";

type ContactMessage = {
  name: string;
  email: string;
  location: string;
  budget: string;
  subject: string;
  message: string;
  createdAt: Date;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function sendContactNotification(contact: ContactMessage) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const mailFrom =
    process.env.MAIL_FROM || "Jawad Portfolio <onboarding@resend.dev>";
  const mailTo = process.env.MAIL_TO;

  if (!resendApiKey || !mailTo) {
    console.log("Resend email is not configured. Contact saved without email.");
    return;
  }

  const resend = new Resend(resendApiKey);

  const safeName = escapeHtml(contact.name);
  const safeEmail = escapeHtml(contact.email);
  const safeLocation = escapeHtml(contact.location);
  const safeBudget = escapeHtml(contact.budget);
  const safeSubject = escapeHtml(contact.subject);
  const safeMessage = escapeHtml(contact.message).replaceAll("\n", "<br />");

  const submittedAt = contact.createdAt.toLocaleString("en-PK", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Karachi",
  });

  const { data, error } = await resend.emails.send({
    from: mailFrom,
    to: [mailTo],
    replyTo: contact.email,
    subject: `New Portfolio Contact: ${contact.subject}`,
    text: `
New portfolio contact message

Name: ${contact.name}
Email: ${contact.email}
Location: ${contact.location}
Budget: ${contact.budget}
Subject: ${contact.subject}

Message:
${contact.message}

Submitted At: ${contact.createdAt.toISOString()}
    `,
    html: `
      <div style="margin:0;padding:0;background:#f4f7fb;font-family:Arial,Helvetica,sans-serif;color:#111827;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f7fb;padding:28px 12px;">
          <tr>
            <td align="center">
              <table width="100%" cellpadding="0" cellspacing="0" style="max-width:680px;background:#ffffff;border-radius:18px;overflow:hidden;border:1px solid #e5e7eb;">
                <tr>
                  <td style="background:linear-gradient(135deg,#111820,#1B242E 55%,#7C3AED);padding:30px 28px;color:#ffffff;">
                    <p style="margin:0 0 10px 0;font-size:13px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#c4b5fd;">
                      Dev Jawad Portfolio
                    </p>
                    <h1 style="margin:0;font-size:28px;line-height:1.25;font-weight:800;color:#ffffff;">
                      New Contact Message
                    </h1>
                    <p style="margin:12px 0 0 0;font-size:15px;line-height:1.7;color:#d1d5db;">
                      Someone submitted your portfolio contact form.
                    </p>
                  </td>
                </tr>

                <tr>
                  <td style="padding:28px;">
                    <p><strong>Name:</strong> ${safeName}</p>
                    <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
                    <p><strong>Location:</strong> ${safeLocation}</p>
                    <p><strong>Budget:</strong> ${safeBudget}</p>
                    <p><strong>Subject:</strong> ${safeSubject}</p>

                    <div style="margin-top:24px;padding:22px;background:#f8fafc;border:1px solid #e5e7eb;border-radius:14px;">
                      <p style="margin:0 0 10px 0;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;color:#7C3AED;">
                        Message
                      </p>
                      <p style="margin:0;font-size:15px;line-height:1.8;color:#374151;">
                        ${safeMessage}
                      </p>
                    </div>

                    <div style="margin-top:22px;padding:16px 18px;background:#111820;border-radius:14px;">
                      <p style="margin:0;font-size:13px;line-height:1.6;color:#d1d5db;">
                        <strong style="color:#ffffff;">Submitted At:</strong> ${submittedAt}
                      </p>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    `,
  });

  if (error) {
    console.error("Resend email failed:", error);
    return;
  }

  console.log("Contact email sent successfully:", data?.id);
}
