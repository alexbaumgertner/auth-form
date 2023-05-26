import { NextPage } from 'next'
import { ResetPasswordForm } from '../../components'

import css from './reset-password.module.css'
import { useEffect, useState } from 'react'
import { reset } from '../frontend-api/auth'

const RemindPasswordPage: NextPage = () => {
  const [state, setState] = useState<'loading' | 'error' | 'default'>('default')
  const [resetData, setResetData] = useState<{ email: string }>({ email: '' })

  useEffect(() => {
    if (resetData.email) {
      setState('loading')
      reset(resetData)
    }
  }, [resetData])

  return (
    <div className={css.page}>
      <ResetPasswordForm
        state={state}
        onSubmit={(submittedData) => {
          console.log(submittedData)
          setResetData(submittedData)
        }}
        className={css.form}
      />
    </div>
  )
}

export default RemindPasswordPage
