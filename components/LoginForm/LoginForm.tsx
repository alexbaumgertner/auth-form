import { useState } from 'react'
import Link from 'next/link'
import { Button, Input, Text } from '../../components'
import css from './LoginForm.module.css'

type LoginFormProps = {
  onSubmit: (loginData: { email: string, password: string }) => void
  state?: 'default' | 'loading' | 'error'
}

const LoginForm = (props: LoginFormProps) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  let stateCss: string = ''
  switch (props.state) {
    case 'loading':
      stateCss = css.loadingState
      break
    case 'error':
      stateCss = css.errorState
      break
    case 'default':
      stateCss = css.defaultState
  }

  return (
    <form
      className={`${css.container} ${stateCss}`}
      onSubmit={(event) => {
        event.preventDefault()
        return props.onSubmit({ email, password })
      }}
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
      <div className={css.password}>
        <Link
          className={css.remindPassword}
          href="/reset-password"
          tabIndex={-1}
        >
          {Text({ tid: 'remindPassword' })}
        </Link>
        <Input
          required
          name="password"
          label={Text({ tid: 'password' })}
          type="password"
          onInput={(event) => {
            setPassword(event.target.value)
          }}
        />
      </div>
      <div className={css.login}>
        <Button
          label={Text({ tid: 'login' })}
          disabled={props.state === 'loading'}
        />
      </div>

      <div className={css.signup}>
        <Link
          href="/create-account"
        >
          {Text({ tid: 'createAccount' })}
        </Link>
      </div>
    </form>
  )
}

export {
  LoginForm,
}
