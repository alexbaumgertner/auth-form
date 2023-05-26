import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { LoginForm } from '../components'
import { login } from './frontend-api/auth'
import css from './index.module.css'

const Home: NextPage = () => {
  const [state, setState] = useState<'loading' | 'error' | 'default'>('default')
  const [loginData, setLoginData] = useState<{ email: string, password: string }>({ email: '', password: '' })

  useEffect(() => {
    if (loginData.email && loginData.password) {
      setState('loading')
      login(loginData)
    }
  }, [loginData])

  return (
    <div>
      <Head>
        <title>React Login form</title>
        <meta name="description" content="Login form" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={css.loginForm}>
        <LoginForm
          state={state}
          onSubmit={(submittedData) => {
            console.log(submittedData)
            setLoginData(submittedData)
          }}
        />
      </div>
    </div>
  )
}

export default Home
