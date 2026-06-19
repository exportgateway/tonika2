import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";
import { contactEmail } from "@/lib/content";

const schema = z.object({
  name: z.string().trim().min(2).max(120),
  company: z.string().trim().max(160).optional(),
  email: z.string().trim().email().max(180),
  phone: z.string().trim().max(80).optional(),
  message: z.string().trim().min(8).max(3000),
  website: z.string().trim().max(200).optional()
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM ?? user;
  const to = process.env.CONTACT_TO_EMAIL ?? contactEmail;

  if (!host || !user || !pass || !from) {
    return NextResponse.json({ error: "SMTP is not configured" }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass }
  });

  const { name, company, email, phone, message } = parsed.data;

  await transporter.sendMail({
    from,
    to,
    replyTo: email,
    subject: `TONIKA 2 website inquiry - ${name}`,
    text: [
      "New TONIKA 2 website inquiry",
      "",
      `Name: ${name}`,
      `Company: ${company || "-"}`,
      `Email: ${email}`,
      `Phone: ${phone || "-"}`,
      "",
      message
    ].join("\n")
  });

  return NextResponse.json({ ok: true });
}
