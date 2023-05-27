import type { NextApiRequest, NextApiResponse } from 'next'

type User = {
  email: string
  password: string
  id: number
  name?: string
  avatar?: string
}

const newUser = {} as User

export default function handler (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const loginData = JSON.parse(req.body)

    // TODO: check if user exists
    // TODO: create user

    newUser.id = Date.now()
    newUser.email = loginData.email
    // TODO: hash password
    newUser.password = loginData.password

    res.json(newUser)

  } else {
    res.status(405).end()
  }
}
