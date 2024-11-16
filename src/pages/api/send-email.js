import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Only POST requests allowed" });
  }

  const { email, subject, message, firstName, lastName } = req.body;

  // Configure the email transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "solocoder.se@gmail.com", // Your email address
      pass: "dcsw cicu izsh uwbc", // Your password
    },
  });

  try {
    await transporter.sendMail({
      from: `"${firstName} ${lastName}" <${email}>`, // Sender info
      to: "solocoder.se@gmail.com", // Receiver email
      subject: subject,
      text: message,
    });

    return res.status(200).send({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).send({ message: "Failed to send email" });
  }
}
