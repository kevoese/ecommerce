import { NextApiRequest, NextApiResponse } from 'next';
import data from './data';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const payload = {
    message: 'Home data retried successfully',
    ...(data || {}),
  };
  res.status(200).json(payload);
}
