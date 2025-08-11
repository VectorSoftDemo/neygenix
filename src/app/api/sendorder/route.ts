import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
    try {
        const data = await request.json();

        if (!data.accountName || !data.email || !data.phone) {
            return NextResponse.json(
                { success: false, message: "Missing required fields" },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const htmlBody = `
  <h2>New Supply Order Request</h2>
  <p><strong>Account Name:</strong> ${data.accountName}</p>
  <p><strong>Email:</strong> ${data.email}</p>
  <p><strong>Phone:</strong> ${data.phone}</p>
  <p><strong>Address:</strong> ${data.address}, ${data.city}, ${data.state} - ${data.zipCode}</p>
  <p><strong>Delivery Method:</strong> ${data.deliveryMethod}</p>
  <p><strong>Message:</strong> ${data.message || "N/A"}</p>

  <h3>Supplies</h3>
  <ul>
    ${Object.entries(data.supplies)
                .map(([key, value]) => `<li><strong>${key}:</strong> ${value || "0"}</li>`)
                .join("")}
  </ul>

  <h3>Drug Test Cups</h3>
  <ul>
    ${Object.entries(data.drugTestCups)
                .map(([key, value]) => `<li><strong>${key}:</strong> ${value || "0"}</li>`)
                .join("")}
  </ul>

  <h3>Drug Test Dip Cards</h3>
  <ul>
    ${Object.entries(data.drugTestDipCards)
                .map(([key, value]) => `<li><strong>${key}:</strong> ${value || "0"}</li>`)
                .join("")}
  </ul>

  <h3>Other Items</h3>
  <ul>
    ${Object.entries(data.otherItems)
                .map(([key, value]) => `<li><strong>${key}:</strong> ${value || "0"}</li>`)
                .join("")}
  </ul>
`;

        const info = await transporter.sendMail({
            from: `"Supply Order" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_RECEIVER,
            subject: "New Supply Order Request",
            html: htmlBody,
        });

        return NextResponse.json(
            { success: true, messageId: info.messageId },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { success: false, message: "Failed to send email" },
            { status: 500 }
        );
    }
}
