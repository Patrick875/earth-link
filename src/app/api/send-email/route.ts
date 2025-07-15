// src/app/api/send-email/route.ts
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const { to, subject, text, html } = await req.json()

    if (!to || !subject || (!text && !html)) {
      return NextResponse.json({ message: 'Missing fields' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: 'mail.earthlinkgroup.com',
      port: '587',
      secure: false,
      auth: {
        user: "support@earthlinkgroup.com",
        pass: "39pJJ5L7K3k2zX8",
      },
    })

    await transporter.sendMail({
      from: "Earthlink Contact Form",
      to,
      subject,
      text,
      html,
    })

    return NextResponse.json({ message: 'Email sent successfully' })
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 })
  }
}

