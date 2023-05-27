import { NextPage } from 'next'
import { CreateAccountForm } from '../../components'
import { signup } from '../../frontend-api/auth'

import css from './create-account.module.css'
import { useEffect, useState } from 'react'

const CreateAccount: NextPage = () => {
  const [state, setState] = useState<'loading' | 'error' | 'default'>('default')
  const [signUpData, setSignUpData] = useState<{ email: string, password: string }>({ email: '', password: '' })

  useEffect(() => {
    if (signUpData.email && signUpData.password) {
      setState('loading')
      signup(signUpData)
    }
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
    </div>
  )
}

export default CreateAccount
