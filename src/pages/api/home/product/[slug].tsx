import { NextApiRequest, NextApiResponse } from 'next';
import products from '../products/data';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;

  const product = products.find((item) => item.slug === slug);
  const payload = {
    message: 'Product retreived successfully',
    data: {
      product,
    },
  };
  res.status(200).json(payload);
}
