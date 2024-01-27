import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { name, email, subject, message } = await req.json();
    const body = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    <div><p>Name: ${name}</p>\n<p>Email: ${email}</p>\n<p>Subject: ${subject}</p>\n<p>Message: ${message}</p></div>
    </body>
    </html>
    `;

    // Your email sending logic here
    const mailOptions = {
      from: `${name} wants to stay in touch with you.`,
      to: process.env.EMAIL,
      subject: subject,
      html: body,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Some Internal Error Occured!" },
      { status: 500 }
    );
  }
}
