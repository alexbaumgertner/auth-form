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
    <div className={css.page}>
      <LoginForm
        state={state}
        onSubmit={(submittedData) => {
          console.log(submittedData)
          setLoginData(submittedData)
        }}
        className={css.form}
      />
    </div>
  )
}

export default Home
