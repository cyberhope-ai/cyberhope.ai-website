import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  if (!process.env.NEXT_USE_NETLIFY_FORMS) {
    return NextResponse.json(
      { message: 'Form submissions are not enabled' },
      { status: 404 }
    )
  }

  const formData = await request.formData()
  const data = Object.fromEntries(formData.entries())

  return NextResponse.json(
    { message: 'Form submitted successfully', data },
    { status: 200 }
  )
} 