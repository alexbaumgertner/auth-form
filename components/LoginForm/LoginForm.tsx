import { useState } from 'react'
import Link from 'next/link'
import { Button, Input, Text } from '../../components'
import css from './LoginForm.module.css'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form
      className={css.container}
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
          onClick={async () => {
            const loginData = {
              email,
              password,
            }

            const loginResponse = await fetch(
              '/api/auth/signin',
              {
                method: 'post',
                body: JSON.stringify(loginData),
              })

            if (loginResponse.status === 200) {} else {}

          }}
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
