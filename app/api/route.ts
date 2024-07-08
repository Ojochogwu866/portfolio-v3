import { readFile } from 'fs/promises';
import path from 'path';

export async function GET() {
  const buffer = await readFile(path.join(process.cwd(), '/app/assets', 'Resume.pdf'));

  const headers = new Headers();
  headers.append('Content-Disposition', 'attachment; filename="Resume.pdf"');
  headers.append('Content-Type', 'application/pdf');

  return new Response(buffer, {
    headers,
  });
}
