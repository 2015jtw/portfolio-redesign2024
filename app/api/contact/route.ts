import { Resend } from 'resend'
import { z } from 'zod'

export const runtime = 'nodejs' // ensure Node (not edge)
export const dynamic = 'force-dynamic'

const resend = new Resend(process.env.RESEND_API_KEY)

const schema = z.object({
  fullName: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email format'),
  title: z.string().min(1, 'Title is required'),
  message: z.string().min(1, 'Message is required'),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const data = schema.parse(body)

    const to = process.env.CONTACT_TO!
    const from = process.env.CONTACT_FROM!

    const subject = `New portfolio inquiry from ${data.fullName}`
    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.fullName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Title:</strong> ${data.title}</p>
      <p><strong>Message:</strong></p>
      <pre style="white-space:pre-wrap">${data.message}</pre>
    `
    const text =
      `New Contact Form Submission\n` +
      `Name: ${data.fullName}\n` +
      `Email: ${data.email}\n` +
      `Title: ${data.title}\n\n` +
      `Message:\n${data.message}\n`

    await resend.emails.send({ from, to, subject, html, text })

    return Response.json({ ok: true })
  } catch (err: any) {
    // zod errors or send errors
    const msg = err?.message ?? 'Unknown error'
    return new Response(JSON.stringify({ ok: false, error: msg }), { status: 400 })
  }
}

