import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const sample = {
    userId: req.query.id,
    cars: [
      { id: 1, brand: 'Ferrari', model: 'F40', category: 'Hypercar', rarity: 'Legendary', image: '/cars/f40.jpg' },
      { id: 2, brand: 'Ford', model: 'GT40', category: 'Race', rarity: 'Rare', image: '/cars/gt40.jpg' }
    ]
  }
  res.status(200).json(sample)
}