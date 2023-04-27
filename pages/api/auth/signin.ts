import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const loginData = req.body

    if (loginData.email === 'test@example.com' && loginData.password === 'test') {
      res.status(200).end()
    } else {
      res.status(403).end()
    }

  } else {
    res.status(405).end()
  }
}
