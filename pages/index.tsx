import type { NextPage } from 'next'
import Link from 'next/link'
import css from './index.module.css'
import { Text } from '../components'

const HomePage: NextPage = () => {
  return (
    <div className={css.page}>
      <ul className={css.menu}>
        <li>
          <Link
            href="/login"
          >
            {Text({ tid: 'login' })}
          </Link>
        </li>
        <li>
          <Link
            href="/create-account"
          >
            {Text({ tid: 'createAccount' })}
          </Link>
        </li>
        <li>
          <Link
            href="/reset-password"
          >
            {Text({ tid: 'resetPassword' })}
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default HomePage
