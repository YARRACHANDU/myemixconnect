import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phoneNumber, subject, message } = body;

    // Validate request body
    if (!fullName || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All required fields must be filled." },
        { status: 400 }
      );
    }

    // Configure SMTP transport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER || "", 
        pass: process.env.SMTP_PASS || "",
      },
    });

    const mailOptions = {
      from: `"${fullName}" <${email}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL || "contactus@myeximbusiness.com",
      subject: `New Enquiry: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #139c5e; border-bottom: 2px solid #139c5e; padding-bottom: 10px;">New Website Enquiry</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 140px;">Full Name:</td>
              <td style="padding: 8px 0;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Phone Number:</td>
              <td style="padding: 8px 0;">${phoneNumber || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Subject:</td>
              <td style="padding: 8px 0;">${subject}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #139c5e; border-radius: 4px;">
            <h3 style="margin-top: 0; color: #333;">Message:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6; margin-bottom: 0;">${message}</p>
          </div>
          <div style="margin-top: 20px; font-size: 11px; color: #888; border-top: 1px solid #eee; padding-top: 10px; text-align: center;">
            This email was sent from the contact form on MY EXIM Connect.
          </div>
        </div>
      `,
    };

    // If SMTP auth is not configured, log to server console and succeed for development/preview
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.warn("SMTP credentials not configured. Enquiry details logged to server console:");
      console.log("Enquiry Details:", { fullName, email, phoneNumber, subject, message });
      return NextResponse.json(
        { 
          success: true, 
          message: "Enquiry received! (Dev Mode: logged details to server console)" 
        },
        { status: 200 }
      );
    }

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Enquiry sent successfully!" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: error.message || "Failed to submit enquiry." },
      { status: 500 }
    );
  }
}
