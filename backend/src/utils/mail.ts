// import dns from "node:dns/promises";
// import nodemailer from "nodemailer";
// import { env, isEmailConfigured } from "../config/env.js";

// type ContactMessage = {
//   name: string;
//   email: string;
//   location: string;
//   budget: string;
//   subject: string;
//   message: string;
//   createdAt: Date;
// };

// function escapeHtml(value: string) {
//   return value
//     .replaceAll("&", "&amp;")
//     .replaceAll("<", "&lt;")
//     .replaceAll(">", "&gt;")
//     .replaceAll('"', "&quot;")
//     .replaceAll("'", "&#039;");
// }

// export async function sendContactNotification(contact: ContactMessage) {
//   if (!isEmailConfigured) {
//     console.log("Email is not configured. Contact message saved without email.");
//     return;
//   }

//   const smtpPort = Number(env.SMTP_PORT) || 587;

//   // Force Gmail SMTP to IPv4 because Railway is failing on IPv6.
//   const smtpAddress = await dns.lookup(env.SMTP_HOST, {
//     family: 4,
//   });

//   const transporter = nodemailer.createTransport({
//     host: smtpAddress.address,
//     port: smtpPort,

//     // Gmail: 587 = STARTTLS, 465 = SSL
//     secure: smtpPort === 465,
//     requireTLS: smtpPort === 587,

//     auth: {
//       user: env.SMTP_USER,
//       pass: env.SMTP_PASS,
//     },

//     // Required because host is IPv4 but certificate belongs to smtp.gmail.com
//     tls: {
//       servername: env.SMTP_HOST,
//     },

//     connectionTimeout: 60000,
//     greetingTimeout: 60000,
//     socketTimeout: 60000,
//   });

//   const safeName = escapeHtml(contact.name);
//   const safeEmail = escapeHtml(contact.email);
//   const safeLocation = escapeHtml(contact.location);
//   const safeBudget = escapeHtml(contact.budget);
//   const safeSubject = escapeHtml(contact.subject);
//   const safeMessage = escapeHtml(contact.message).replaceAll("\n", "<br />");

//   const submittedAt = contact.createdAt.toLocaleString("en-PK", {
//     dateStyle: "medium",
//     timeStyle: "short",
//     timeZone: "Asia/Karachi",
//   });

//   await transporter.sendMail({
//     from: env.MAIL_FROM,
//     to: env.MAIL_TO,
//     replyTo: contact.email,
//     subject: `New Portfolio Contact: ${contact.subject}`,
//     text: `
// New portfolio contact message

// Name: ${contact.name}
// Email: ${contact.email}
// Location: ${contact.location}
// Budget: ${contact.budget}
// Subject: ${contact.subject}

// Message:
// ${contact.message}

// Submitted At: ${contact.createdAt.toISOString()}
//     `,
//     html: `
//       <div style="margin:0;padding:0;background:#f4f7fb;font-family:Arial,Helvetica,sans-serif;color:#111827;">
//         <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f7fb;padding:28px 12px;">
//           <tr>
//             <td align="center">
//               <table width="100%" cellpadding="0" cellspacing="0" style="max-width:680px;background:#ffffff;border-radius:18px;overflow:hidden;border:1px solid #e5e7eb;box-shadow:0 18px 45px rgba(15,23,42,0.12);">
//                 <tr>
//                   <td style="background:linear-gradient(135deg,#111820,#1B242E 55%,#7C3AED);padding:30px 28px;color:#ffffff;">
//                     <p style="margin:0 0 10px 0;font-size:13px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#c4b5fd;">
//                       Dev Jawad Portfolio
//                     </p>
//                     <h1 style="margin:0;font-size:28px;line-height:1.25;font-weight:800;color:#ffffff;">
//                       New Contact Message
//                     </h1>
//                     <p style="margin:12px 0 0 0;font-size:15px;line-height:1.7;color:#d1d5db;">
//                       Someone submitted your portfolio contact form.
//                     </p>
//                   </td>
//                 </tr>

//                 <tr>
//                   <td style="padding:28px;">
//                     <table width="100%" cellpadding="0" cellspacing="0">
//                       <tr>
//                         <td style="padding:14px 0;border-bottom:1px solid #eef2f7;">
//                           <p style="margin:0 0 4px 0;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#7C3AED;">Name</p>
//                           <p style="margin:0;font-size:16px;font-weight:700;color:#111827;">${safeName}</p>
//                         </td>
//                       </tr>

//                       <tr>
//                         <td style="padding:14px 0;border-bottom:1px solid #eef2f7;">
//                           <p style="margin:0 0 4px 0;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#7C3AED;">Email</p>
//                           <p style="margin:0;font-size:16px;font-weight:700;color:#111827;">
//                             <a href="mailto:${safeEmail}" style="color:#7C3AED;text-decoration:none;">${safeEmail}</a>
//                           </p>
//                         </td>
//                       </tr>

//                       <tr>
//                         <td style="padding:14px 0;border-bottom:1px solid #eef2f7;">
//                           <p style="margin:0 0 4px 0;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#7C3AED;">Location</p>
//                           <p style="margin:0;font-size:16px;font-weight:700;color:#111827;">${safeLocation}</p>
//                         </td>
//                       </tr>

//                       <tr>
//                         <td style="padding:14px 0;border-bottom:1px solid #eef2f7;">
//                           <p style="margin:0 0 4px 0;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#7C3AED;">Budget</p>
//                           <p style="margin:0;font-size:16px;font-weight:700;color:#111827;">${safeBudget}</p>
//                         </td>
//                       </tr>

//                       <tr>
//                         <td style="padding:14px 0;border-bottom:1px solid #eef2f7;">
//                           <p style="margin:0 0 4px 0;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#7C3AED;">Subject</p>
//                           <p style="margin:0;font-size:16px;font-weight:700;color:#111827;">${safeSubject}</p>
//                         </td>
//                       </tr>
//                     </table>

//                     <div style="margin-top:24px;padding:22px;background:#f8fafc;border:1px solid #e5e7eb;border-radius:14px;">
//                       <p style="margin:0 0 10px 0;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;color:#7C3AED;">
//                         Message
//                       </p>
//                       <p style="margin:0;font-size:15px;line-height:1.8;color:#374151;">
//                         ${safeMessage}
//                       </p>
//                     </div>

//                     <div style="margin-top:22px;padding:16px 18px;background:#111820;border-radius:14px;">
//                       <p style="margin:0;font-size:13px;line-height:1.6;color:#d1d5db;">
//                         <strong style="color:#ffffff;">Submitted At:</strong> ${submittedAt}
//                       </p>
//                     </div>
//                   </td>
//                 </tr>

//                 <tr>
//                   <td style="padding:20px 28px;background:#f9fafb;border-top:1px solid #e5e7eb;text-align:center;">
//                     <p style="margin:0;font-size:13px;color:#6b7280;">
//                       This email was generated automatically from your portfolio website.
//                     </p>
//                   </td>
//                 </tr>
//               </table>
//             </td>
//           </tr>
//         </table>
//       </div>
//     `,
//   });
// }
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
