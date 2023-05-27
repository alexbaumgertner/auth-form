import { NextPage } from 'next'
import { CreateAccountForm, DevLogger } from '../../components'
import { signup } from '../../frontend-api/auth'

import css from './create-account.module.css'
import { useEffect, useState } from 'react'

const CreateAccountPage: NextPage = () => {
  const [state, setState] = useState<'loading' | 'error' | 'default'>('default')
  const [signUpData, setSignUpData] = useState<{ email: string, password: string }>({ email: '', password: '' })
  const [loginResponse, setLoginResponse] = useState<any>(null)

  useEffect(() => {
    async function signupAsync () {
      if (signUpData.email && signUpData.password) {
        setState('loading')
        try {
          const response = await signup(signUpData)
          setLoginResponse(response)
        } catch (error) {
          console.error(error)
          setState('error')
        } finally {
          setState('default')
        }
        signup(signUpData)
      }
    }

    signupAsync()

  }, [signUpData])


  return (
    <div className={css.page}>
      <CreateAccountForm
        state={state}
        onSubmit={(submittedData) => {
          console.log(submittedData)
          setSignUpData(submittedData)
        }}
        className={css.form}
      />
      <DevLogger logData={loginResponse} />
    </div>
  )
}

export default CreateAccountPage
