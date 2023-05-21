import { useState } from 'react'

import { Button, Input, Text } from '../../components'
import css from './ResetPasswordForm.module.css'

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
            label={Text({ tid: 'email' })}
            placeholder={Text({ tid: 'emailPlaceholder' })}
            onInput={(event) => {
              setEmail(event.target.value)
            }}
          />
        </div>
        <div className={css.resetPassword}>
          <Button
            label={Text({ tid: 'resetPassword' })}
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

