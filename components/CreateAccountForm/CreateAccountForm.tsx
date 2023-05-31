import { useState } from 'react'

import { Input, Text, Form } from '../../components'
import css from './CreateAccountForm.module.css'
import Link from 'next/link'

type PropsType = {
  onSubmit: (formData: { email: string, password: string }) => void
  className?: string
  state: 'loading' | 'error' | 'default'
}

const CreateAccountForm = (props: PropsType) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')

  const isPasswordMistyped = passwordRepeat?.length > 0 &&
    password?.length > 0 &&
    password !== passwordRepeat

  const passwordMistypedText = Text({ tid: 'passwordMistyped' })

  return (
    <div className={props.className}>
      <Form
        canBeSubmitted={!isPasswordMistyped}
        onSubmit={props.onSubmit}
        state={props.state}
        formData={{ email, password }}
        submitLabel={Text({ tid: 'createAccount' })}
      >
        <div className={css.email}>
          <Input
            required
            type="email"
            name="email"
            autoComplete="username"
            label={Text({ tid: 'email' })}
            placeholder={Text({ tid: 'emailPlaceholder' })}
            onInput={(event) => {
              setEmail(event.target.value)
            }}
          />
        </div>
        <div className={css.passwords}>
          <div className={css.password}>
            <Input
              required
              name="password"
              autoComplete="new-password"
              label={Text({ tid: 'password' })}
              type="password"
              onInput={(event) => {
                setPassword(event.target.value)
              }}
            />
          </div>
          <div className={css.passwordRepeat}>
            <Input
              required
              name="passwordSubmit"
              autoComplete="new-password"
              label={Text({ tid: 'passwordSubmit' })}
              type="password"
              onInput={(event) => {
                setPasswordRepeat(event.target.value)
              }}
            />
          </div>
          {isPasswordMistyped && (
            <div className={css.passwordMistyped}>
              {passwordMistypedText}.
            </div>
          )}
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
  CreateAccountForm
}

