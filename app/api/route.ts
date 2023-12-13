import { readFile } from 'fs/promises';
import path from 'path';

export async function GET() {
  const buffer = await readFile(path.join(process.cwd(), 'src/app/assets', 'ojochogwudickson.pdf'));

  const headers = new Headers();
  headers.append('Content-Disposition', 'attachment; filename="ojochogwudickson.pdf"');
  headers.append('Content-Type', 'application/pdf');

  return new Response(buffer, {
    headers,
  });
}
