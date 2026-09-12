import { db } from "@/db";
import { inquiries } from "@/db/schema";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

function asTrimmedString(value: unknown, max = 2000): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed) return null;
  return trimmed.slice(0, max);
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const data = (body ?? {}) as Record<string, unknown>;

  const name = asTrimmedString(data.name, 120);
  const email = asTrimmedString(data.email, 200);
  const phone = asTrimmedString(data.phone, 60);
  const arrival = asTrimmedString(data.arrival, 10);
  const departure = asTrimmedString(data.departure, 10);
  const guests = asTrimmedString(data.guests, 60);
  const message = asTrimmedString(data.message, 4000);

  if (!name || !email || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please provide your name and a valid email." },
      { status: 400 },
    );
  }

  if ((arrival && !DATE_RE.test(arrival)) || (departure && !DATE_RE.test(departure))) {
    return NextResponse.json(
      { ok: false, error: "Dates must use YYYY-MM-DD." },
      { status: 400 },
    );
  }

  try {
    await db.insert(inquiries).values({
      name,
      email,
      phone,
      arrival,
      departure,
      guests,
      message,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[inquiries] failed to save inquiry", error);
    return NextResponse.json(
      {
        ok: false,
        error:
          "We could not save your inquiry right now. Please email us directly at blueholevillas@gmail.com.",
      },
      { status: 500 },
    );
  }
}
