import { Button, Input } from '../../components'
import { useState } from 'react'
import css from './CreateAccountForm.module.css'

/* TODO: use i18n */
const i18n = {
  email: 'Почта',
  emailPlaceholder: 'mail@example.com',
  password: 'Пароль',
  passwordSubmit: 'Подтвердите пароль',
  createAccount: 'Создать аккаунт'
}

type PropsType = {
  onSubmit: () => void
  className?: string
}

const CreateAccountForm = (props: PropsType) => {
  const [email, setEmail] = useState('')

  return (
    <div className={props.className}>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          props.onSubmit()
        }}
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
        <div className={css.password}>
          <Input
            required
            name="password"
            label={i18n.password}
            type="password"
          />
          <Input
            required
            name="passwordSubmit"
            label={i18n.passwordSubmit}
            type="password"
          />
        </div>
        <div className={css.createAccount}>
          <Button
            className={css.createAccountButton}
            label={i18n.createAccount}
            onClick={async () => {
              const loginData = {
                email,
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
      </form>
    </div>
  )
}

export {
  CreateAccountForm
}

