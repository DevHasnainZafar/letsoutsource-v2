import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, subject, message } = await req.json();

  // transporter
  let transporter = nodemailer.createTransport({
    host: "premium145.web-hosting.com.",
    port: 465,
    secure: true,
    auth: {
      user: "support@letsoutsource.co.uk", // Your cPanel email address
      pass: "M,R^!fegR3yX", // The email account's password
    },
  });

  // Email options
  const mailOptions = {
    from: `"${name}" <support@letsoutsource.co.uk>`,
    // to: "jsher@letsoutsource.co.uk",
    to: "signatureartist90@gmail.com",
    subject,
    replyTo: email,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #fa721b;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <div style="background: #f9f9f9; padding: 10px; border-left: 4px solid #fa721b;">
          ${message.replace(/\n/g, "<br>")}
        </div>
      </div>
    `,
  };

  // Send email
  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
