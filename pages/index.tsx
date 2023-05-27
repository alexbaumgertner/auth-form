import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import { LoginForm, DevLogger } from '../components'
import { login } from '../frontend-api/auth'
import css from './index.module.css'

const Home: NextPage = () => {
  const [state, setState] = useState<'loading' | 'error' | 'default'>('default')
  const [loginData, setLoginData] = useState<{ email: string, password: string }>({ email: '', password: '' })
  const [loginResponse, setLoginResponse] = useState<any>(null)

  useEffect(() => {
    async function loginAsync () {
      if (loginData.email && loginData.password) {
        setState('loading')
        try {
          const response = await login(loginData)
          setLoginResponse(response)
        } catch (error) {
          console.error(error)
          setState('error')
        } finally {
          setState('default')
        }
      }
    }

    loginAsync()
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
      <DevLogger logData={loginResponse} />
    </div>
  )
}

export default Home
