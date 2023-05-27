import { NextPage } from 'next'
import { DevLogger, ResetPasswordForm } from '../../components'

import css from './reset-password.module.css'
import { useEffect, useState } from 'react'
import { login, reset } from '../../frontend-api/auth'

const ResetPasswordPage: NextPage = () => {
  const [state, setState] = useState<'loading' | 'error' | 'default'>('default')
  const [resetData, setResetData] = useState<{ email: string }>({ email: '' })
  const [resetResponse, setResetResponse] = useState<any>(null)

  useEffect(() => {
    async function resetAsync () {
      if (resetData.email) {
        setState('loading')
        try {
          const response = await reset(resetData)
          setResetResponse(response)
        } catch (error) {
          console.error(error)
          setState('error')
        } finally {
          setState('default')
        }
      }
    }

    resetAsync()
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
      <DevLogger logData={resetResponse} />
    </div>
  )
}

export default ResetPasswordPage
