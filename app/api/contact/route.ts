import { NextResponse } from "next/server"

const recipientEmail = "orvexasystems.site@gmail.com"

interface DemoRequest {
  name?: string
  phone?: string
  email?: string
  business?: string
  product?: string
  message?: string
}

const clean = (value: unknown, max = 2000) => (typeof value === "string" ? value.trim().slice(0, max) : "")

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    return NextResponse.json(
      { error: "Online booking isn't set up yet. Please message us on WhatsApp instead." },
      { status: 503 },
    )
  }

  let body: DemoRequest
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid form submission." }, { status: 400 })
  }

  const name = clean(body.name, 120)
  const phone = clean(body.phone, 40)
  const email = clean(body.email, 200)
  const business = clean(body.business, 160)
  const product = clean(body.product, 60) || "Not specified"
  const message = clean(body.message) || "(no message)"

  if (!name || (!phone && !email)) {
    return NextResponse.json({ error: "Please add your name and a phone or WhatsApp number." }, { status: 400 })
  }

  const emailResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || "Orvexa Systems <onboarding@resend.dev>",
      to: [recipientEmail],
      ...(email ? { reply_to: email } : {}),
      subject: `Demo request from ${name} (${product})`,
      text: [`Name: ${name}`, `Phone / WhatsApp: ${phone || "-"}`, `Email: ${email || "-"}`, `Business: ${business || "-"}`, `Product: ${product}`, "", message].join("\n"),
    }),
  })

  if (!emailResponse.ok) {
    return NextResponse.json(
      { error: "We couldn't send that. Please try again, or message us on WhatsApp." },
      { status: 502 },
    )
  }

  return NextResponse.json({ success: true })
}
