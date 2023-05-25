import { useState } from 'react'

import { Input, Text, Form } from '../../components'
import css from './ResetPasswordForm.module.css'

type PropsType = {
  onSubmit: (loginData: { email: string }) => void
  className?: string
}

const ResetPasswordForm = (props: PropsType) => {
  const [email, setEmail] = useState('')
  return (
    <div className={props.className}>
      <Form
        onSubmit={props.onSubmit}
        formData={{ email }}
        submitLabel={Text({ tid: 'resetPassword' })}
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
      </Form>
    </div>
  )
}

export {
  ResetPasswordForm
}

