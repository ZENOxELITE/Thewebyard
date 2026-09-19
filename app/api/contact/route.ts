import { NextResponse } from "next/server"

const recipientEmail = "orvexasystems.site@gmail.com"

interface ContactRequest {
  name?: string
  email?: string
  company?: string
  service?: string
  message?: string
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    return NextResponse.json(
      { error: "Email delivery is not configured yet." },
      { status: 503 },
    )
  }

  let body: ContactRequest

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid form submission." }, { status: 400 })
  }

  const name = body.name?.trim()
  const email = body.email?.trim()
  const message = body.message?.trim()

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    )
  }

  const service = body.service?.trim() || "Not specified"
  const company = body.company?.trim() || "Not specified"
  const emailResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || "Orvexa Systems <onboarding@resend.dev>",
      to: [recipientEmail],
      reply_to: email,
      subject: `New website enquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company}`,
        `Service: ${service}`,
        "",
        message,
      ].join("\n"),
    }),
  })

  if (!emailResponse.ok) {
    return NextResponse.json(
      { error: "We could not send your message. Please try again or email us directly." },
      { status: 502 },
    )
  }

  return NextResponse.json({ success: true })
}