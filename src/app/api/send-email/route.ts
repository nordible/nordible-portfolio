import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  let body: Record<string, unknown> = {};

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, error: 'Ungültiges JSON-Format (Invalid JSON)' },
      { status: 400 }
    );
  }

  const email = typeof body.email === 'string' ? body.email.trim() : '';

  // Minimal validation to block empty or malformed requests
  if (!email || !email.includes('@')) {
    return NextResponse.json(
      { success: false, error: 'Gültige E-Mail-Adresse erforderlich (Valid email required)' },
      { status: 400 }
    );
  }

  const mailApiUrl = process.env.MAIL_API_URL || 'https://email.nordible.co/api/send-email';
  const mailApiSecret = process.env.MAIL_API_SECRET;

  // Safe lead capture record for server-side logging
  const capturedLeadSummary = {
    timestamp: new Date().toISOString(),
    email,
    phone: body.phone || 'N/A',
    fullName: body.fullName || 'Website Lead',
    projectType: body.projectType || 'General Inquiry',
    details: body.budget || body.description || 'N/A',
    brochureDownload: Boolean(body.brochureDownload),
  };

  const isEn = body.language === 'en' || (typeof body.projectType === 'string' && body.projectType.includes('EN'));
  const brochurePdfUrl = isEn ? '/nordible-corporate-brochure-en.pdf' : '/nordible-corporate-brochure.pdf';

  try {
    if (!mailApiSecret) {
      console.warn('[LEAD CAPTURE - FAILSAFE]: MAIL_API_SECRET missing. Preserving lead data in server log:', capturedLeadSummary);
      return NextResponse.json(
        {
          success: true,
          message: 'Lead erfasst (Lead recorded successfully)',
          downloadUrl: body.brochureDownload ? brochurePdfUrl : undefined,
        },
        { status: 200 }
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

    if (response.ok) {
      const data = await response.json().catch(() => ({}));
      return NextResponse.json(
        {
          success: true,
          ...data,
          downloadUrl: body.brochureDownload ? brochurePdfUrl : undefined,
        },
        { status: 200 }
      );
    }

    // Upstream SMTP service error (e.g. Stalwart credential migration in progress)
    console.warn(`[LEAD CAPTURE - FAILSAFE]: Upstream relay returned HTTP ${response.status}. Preserving lead in server log:`, capturedLeadSummary);

    return NextResponse.json(
      {
        success: true,
        message: 'Lead erfolgreich erfasst (Lead received successfully)',
        downloadUrl: body.brochureDownload ? brochurePdfUrl : undefined,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.warn(`[LEAD CAPTURE - FAILSAFE]: Upstream dispatch connection error (${message}). Preserving lead:`, capturedLeadSummary);

    // Fail-safe UX: Always allow the brochure / lead confirmation through for the user
    return NextResponse.json(
      {
        success: true,
        message: 'Lead erfolgreich übermittelt (Lead received successfully)',
        downloadUrl: body.brochureDownload ? brochurePdfUrl : undefined,
      },
      { status: 200 }
    );
  }
}
