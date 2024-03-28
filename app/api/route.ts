import { readFile } from 'fs/promises';
import path from 'path';

export async function GET() {
  const buffer = await readFile(path.join(process.cwd(), '/app/assets', 'Ojochogwu-dickson-fullstack-engineer-resume.pdf'));

  const headers = new Headers();
  headers.append('Content-Disposition', 'attachment; filename="Ojochogwu-dickson-fullstack-engineer-resume.pdf"');
  headers.append('Content-Type', 'application/pdf');

  return new Response(buffer, {
    headers,
  });
}
