import { NextResponse } from 'next/server';
import { internalDocs, executiveAssets } from '@/data/docsContent';

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const pin = typeof body.pin === 'string' ? body.pin.trim() : '';

    const serverPin = (process.env.ADMIN_PIN || '').trim();

    if (!serverPin) {
      console.warn('[PORTAL AUTH]: No ADMIN_PIN configured in environment.');
      return NextResponse.json(
        {
          success: false,
          error: 'No access PIN is configured on the server. Please set ADMIN_PIN in your .env file.',
        },
        { status: 503 }
      );
    }

    if (!pin || pin !== serverPin) {
      return NextResponse.json(
        { success: false, error: 'Incorrect PIN. Access denied.' },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      docs: internalDocs,
      assets: executiveAssets,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('[PORTAL AUTH ERROR]:', message);
    return NextResponse.json(
      { success: false, error: 'Authentication failed due to server error.' },
      { status: 500 }
    );
  }
}
