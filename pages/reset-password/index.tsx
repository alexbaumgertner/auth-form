import { NextPage } from 'next'
import { ResetPasswordForm } from '../../components'

import css from './reset-password.module.css'

const RemindPasswordPage: NextPage = () => {

  const resetPassword = () => {}

  return (
    <div className={css.page}>
      <ResetPasswordForm
        onSubmit={resetPassword}
        className={css.form}
      />
    </div>
  )
}

export default RemindPasswordPage
