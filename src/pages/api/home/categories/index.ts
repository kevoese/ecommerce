import { NextApiRequest, NextApiResponse } from 'next';
import data, { categoryAds } from './data';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const payload = {
    message: 'Categories retried successfully',
    data,
    categoryAds,
  };
  res.status(200).json(payload);
}
