/**
 * Downloads a brochure PDF reliably by verifying the response is a genuine PDF
 * before triggering the browser download, preventing 404/HTML error pages from
 * being saved as corrupted `.pdf` files.
 */
export async function downloadBrochurePdf(url: string, fileName: string): Promise<boolean> {
  try {
    const response = await fetch(url, { cache: 'no-store' });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status} while fetching ${url}`);
    }

    const contentType = response.headers.get('content-type') || '';
    const buffer = await response.arrayBuffer();
    const headerBytes = new Uint8Array(buffer.slice(0, 5));
    const headerText = String.fromCharCode(...headerBytes);

    if (!contentType.includes('pdf') && headerText !== '%PDF-') {
      throw new Error(`Invalid PDF payload received from ${url}`);
    }

    const pdfBlob = new Blob([buffer], { type: 'application/pdf' });
    const objectUrl = URL.createObjectURL(pdfBlob);

    const link = document.createElement('a');
    link.href = objectUrl;
    link.download = fileName;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => URL.revokeObjectURL(objectUrl), 10000);
    return true;
  } catch (err) {
    console.error('Brochure PDF download failed:', err);
    return false;
  }
}
