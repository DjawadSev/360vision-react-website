import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || "vaguetamashi@gmail.com";
const CONTACT_FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "360 Vision <onboarding@resend.dev>";

const buildHtml = (name: string, email: string, project: string) => `
  <h2>New contact from 360 Vision website</h2>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Project:</strong></p>
  <p>${project.replace(/\n/g, "<br/>")}</p>
`;

const buildText = (name: string, email: string, project: string) =>
  [
    "New contact from 360 Vision website",
    `Name: ${name}`,
    `Email: ${email}`,
    "Project:",
    project,
  ].join("\n");

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const project = typeof body.project === "string" ? body.project.trim() : "";

    if (!name || !email || !project) {
      return NextResponse.json({ success: false, error: "Missing fields" }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY environment variable");
      return NextResponse.json({ success: false, error: "Email service not configured" }, { status: 500 });
    }

    const { error } = await resend.emails.send({
      from: CONTACT_FROM_EMAIL,
      to: [CONTACT_TO_EMAIL],
      subject: `New inquiry from ${name}`,
      reply_to: email,
      html: buildHtml(name, email, project),
      text: buildText(name, email, project),
    });

    if (error) {
      console.error("Resend contact email error", error);
      return NextResponse.json({ success: false, error: "Unable to send message" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error", error);
    return NextResponse.json({ success: false, error: "Unable to send message" }, { status: 500 });
  }
}
