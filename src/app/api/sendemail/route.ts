import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, dob, gender, phone, email, message } = await req.json();

        if (!name || !phone || !email || !message) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // Configure transporter (for Gmail — use OAuth2 for production if possible)
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, // your Gmail address
                pass: process.env.EMAIL_PASS, // your Gmail app password
            },
        });

        // Email content
        const mailOptions = {
            from: `"Website Contact Form from Neugenix " <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_RECEIVER, // where you want to receive the emails
            subject: "New Contact Form Submission from Neugenix",
            html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Date of Birth:</strong> ${dob || "Not Provided"}</p>
        <p><strong>Gender:</strong> ${gender || "Not Provided"}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
        console.error("Email sending error:", error);
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
}
