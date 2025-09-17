import { NextRequest, NextResponse } from 'next/server';

const WEB3FORMS_ACCESS_KEY = 'c6756334-43b4-408d-9242-f925a7e6176c';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, organization, email, interest, message } = body;

    // Validate required fields
    if (!name || !organization || !email || !interest) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Submit to Web3Forms
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `New Investment Inquiry from ${name} - ${organization}`,
        from_name: 'CyberHopeAI Website',
        name: name,
        organization: organization,
        email: email,
        interest: interest,
        message: message || 'No additional message provided',
        // Additional metadata
        website: 'cyberhopeai.com',
        timestamp: new Date().toISOString(),
      }),
    });

    const result = await response.json();

    if (result.success) {
      console.log('Contact form successfully submitted:', {
        name,
        organization,
        email,
        interest,
        timestamp: new Date().toISOString(),
      });

      return NextResponse.json(
        { message: 'Contact form submitted successfully' },
        { status: 200 }
      );
    } else {
      console.error('Web3Forms submission failed:', result);
      return NextResponse.json(
        { error: 'Failed to submit form. Please try again.' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}