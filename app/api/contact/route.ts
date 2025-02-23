import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const formData = await request.formData()
  
  // Add form-name field required by Netlify
  formData.append("form-name", "contact")

  try {
    const response = await fetch(request.url, {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    if (!response.ok) {
      throw new Error('Failed to submit to Netlify')
    }

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Form submission error:', error)
    return NextResponse.json(
      { message: 'Error submitting form' },
      { status: 500 }
    )
  }
} 