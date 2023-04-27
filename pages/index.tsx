import type { NextPage } from 'next'
import Head from 'next/head'
import { LoginForm } from '../components'
import css from './index.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>React Login form</title>
        <meta name="description" content="Login form" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={css.loginForm}>
        <LoginForm />
      </div>
    </div>
  )
}

export default Home
