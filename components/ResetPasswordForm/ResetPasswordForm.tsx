import { useState } from 'react'

import { Input, Text, Form } from '../../components'
import css from './ResetPasswordForm.module.css'
import Link from 'next/link'

type PropsType = {
  onSubmit: (loginData: { email: string }) => void
  className?: string
  state?: 'default' | 'loading' | 'error'
}

const ResetPasswordForm = (props: PropsType) => {
  const [email, setEmail] = useState('')
  return (
    <div className={props.className}>
      <Form
        onSubmit={props.onSubmit}
        state={props.state}
        formData={{ email }}
        submitLabel={Text({ tid: 'sendRecoverLinkToEmail' })}
      >
        <div className={css.instruction}>
          {Text({ tid: 'resetPasswordInstruction' })}
        </div>
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
      </Form>
      <div className={css.login}>
        <Link
          href="/login"
        >
          {Text({ tid: 'login' })}
        </Link>
      </div>
    </div>
  )
}

export {
  ResetPasswordForm
}

