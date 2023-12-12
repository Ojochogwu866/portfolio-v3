
import { NextApiRequest, NextApiResponse } from 'next';
import { resolve } from 'path';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const pdfFilePath = resolve(process.cwd(), '/ojochogwudickson.pdf', 'ojochogwudickson.pdf');
    res.status(200).send(pdfFilePath);
  } catch (error) {
    console.error('Error in API route:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


