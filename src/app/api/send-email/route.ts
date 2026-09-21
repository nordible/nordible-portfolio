import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const mailApiUrl = process.env.MAIL_API_URL || 'https://email.nordible.co/api/send-email';
    const mailApiSecret = process.env.MAIL_API_SECRET;

    if (!mailApiSecret) {
      console.error('[PORTFOLIO SERVER ERROR]: Missing MAIL_API_SECRET on server.');
      return NextResponse.json(
        { success: false, error: 'Server configuration missing secret' },
        { status: 500 }
      );
    }

    const response = await fetch(mailApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-secret': mailApiSecret,
      },
      body: JSON.stringify(body),
    });

    const data = await response.json().catch(() => ({}));
    return NextResponse.json(data, { status: response.status });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('[PORTFOLIO SERVER ERROR]:', message);
    return NextResponse.json(
      { success: false, error: 'Failed to process lead dispatch' },
      { status: 500 }
    );
  }
}
