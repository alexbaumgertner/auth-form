import { Button, Input } from '../../components'
import { useState } from 'react'

import css from './ResetPasswordForm.module.css'

/* TODO: use i18n */
const i18n = {
  email: 'Почта',
  emailPlaceholder: 'mail@example.com',
  resetPassword: 'Сбросить пароль'
}

type PropsType = {
  onSubmit: () => void
  className?: string
}

const ResetPasswordForm = (props: PropsType) => {
  const [email, setEmail] = useState('')

  return (
    <div className={props.className}>
      <form
        onSubmit={(event) => { event.preventDefault() }}
      >
        <div className={css.email}>
          <Input
            required
            name="email"
            label={i18n.email}
            placeholder={i18n.emailPlaceholder}
            onInput={(event) => {
              setEmail(event.target.value)
            }}
          />
        </div>
        <div className={css.resetPassword}>
          <Button
            label={i18n.resetPassword}
            className={css.resetPasswordButton}
          />
        </div>
      </form>
    </div>
  )
}

export {
  ResetPasswordForm
}

