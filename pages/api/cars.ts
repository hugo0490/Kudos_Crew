import type { NextApiRequest, NextApiResponse } from 'next'

const cars = [
  { id: 1, brand: 'Ferrari', model: 'F40', year: 1992, category: 'Hypercar', rarity: 'Legendary' },
  { id: 2, brand: 'Ford', model: 'GT40', year: 1966, category: 'Race', rarity: 'Rare' }
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(cars)
}