import type { NextApiRequest, NextApiResponse } from 'next'

const user = {
  id: 1,
  email: 'test@example.com',
  password: 'test',
  name: 'Test User',
  avatar: 'https://avatars.githubusercontent.com/u/223620?v=4'
}

export default function handler (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const loginData = JSON.parse(req.body)

    if (loginData.email === user.email && loginData.password === user.password) {
      res.json(user)
    } else {
      res.status(403).end()
    }

  } else {
    res.status(405).end()
  }
}
