import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {

    // TODO: Reset password logic
    const loginData = JSON.parse(req.body)

    res.status(200).end()

  } else {
    res.status(405).end()
  }
}
