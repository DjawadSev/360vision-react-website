import { NextResponse } from "next/server";
import { appendFile, mkdir } from "fs/promises";
import path from "path";

const STORAGE_DIR = path.join(process.cwd(), "data");
const STORAGE_FILE = path.join(STORAGE_DIR, "newsletter-signups.txt");

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const rawEmail = typeof body.email === "string" ? body.email.trim() : "";
    const email = rawEmail.replace(/[\r\n]/g, "").toLowerCase();

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ success: false, error: "Invalid email" }, { status: 400 });
    }

    await mkdir(STORAGE_DIR, { recursive: true });
    const line = `${new Date().toISOString()}\t${email}\n`;
    await appendFile(STORAGE_FILE, line, "utf8");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Newsletter signup error", error);
    return NextResponse.json({ success: false, error: "Unable to save signup" }, { status: 500 });
  }
}
