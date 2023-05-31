import { useState } from 'react'
import Link from 'next/link'
import { Input, Text, Form } from '../../components'
import css from './LoginForm.module.css'

type LoginFormProps = {
  onSubmit: (loginData: { email: string, password: string }) => void
  className?: string
  state?: 'default' | 'loading' | 'error'
}

const LoginForm = (props: LoginFormProps) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className={props.className}>
      <Form
        onSubmit={props.onSubmit}
        state={props.state}
        formData={{ email, password }}
        submitLabel={Text({ tid: 'login' })}
      >
        <div className={css.email}>
          <Input
            required
            name="email"
            type="email"
            autoComplete="username"
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
            autoComplete="current-password"
            label={Text({ tid: 'password' })}
            type="password"
            onInput={(event) => {
              setPassword(event.target.value)
            }}
          />
        </div>
      </Form>
      <div className={css.signup}>
        <Link
          href="/create-account"
        >
          {Text({ tid: 'createAccount' })}
        </Link>
      </div>
      <Link
        className={css.resetPassword}
        href="/reset-password"
      >
        {Text({ tid: 'resetPassword' })}
      </Link>
    </div>
  )
}

export {
  LoginForm,
}
