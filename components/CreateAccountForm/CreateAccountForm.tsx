import { useState } from 'react'

import { Button, Input, Text, Form } from '../../components'
import css from './CreateAccountForm.module.css'

type PropsType = {
  onSubmit: (formData: { email: string }) => void
  className?: string
}

const CreateAccountForm = (props: PropsType) => {
  const [email, setEmail] = useState('')

  return (
    <div className={props.className}>
      <Form
        onSubmit={props.onSubmit}
        formData={{ email }}
        submitLabel={Text({ tid: 'createAccount' })}
      >
        <div className={css.email}>
          <Input
            required
            type="email"
            name="email"
            label={Text({ tid: 'email' })}
            placeholder={Text({ tid: 'emailPlaceholder' })}
            onInput={(event) => {
              setEmail(event.target.value)
            }}
          />
        </div>
        <div className={css.password}>
          <Input
            required
            name="password"
            label={Text({ tid: 'password' })}
            type="password"
          />
          <Input
            required
            name="passwordSubmit"
            label={Text({ tid: 'passwordSubmit' })}
            type="password"
          />
        </div>
      </Form>
    </div>
  )
}

export {
  CreateAccountForm
}

