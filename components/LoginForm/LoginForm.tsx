import { useState } from 'react'
import { Button, Input, Checkbox } from '../../components'
import css from './LoginForm.module.css'

/* TODO: use i18n */
const i18n = {
  email: 'Почта',
  emailPlaceholder: 'mail@example.com',
  password: 'Пароль',
  login: 'Войти',
  rememberMe: 'Запомнить',
  createAccount: 'Создать аккаунт',
}

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isRememberMeChecked, setIsRememberMeChecked] = useState(false)

  return (
    <form
      className={css.container}
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
      <div className={css.password}>
        <Input
          required
          name="password"
          label={i18n.password}
          type="password"
          onInput={(event) => {
            setPassword(event.target.value)
          }}
        />
      </div>
      <div className={css.rememberMe}>
        <Checkbox
          onChange={(event) => {
            setIsRememberMeChecked(event.target.checked)
          }}>
          {i18n.rememberMe}
        </Checkbox>
      </div>

      <div className={css.login}>
        <Button
          label={i18n.login}
          onClick={async () => {
            const loginData = {
              email,
              password,
              isRememberMeChecked,
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
        <Button
          label={i18n.createAccount}
          onClick={() => {
          }}
        />
      </div>
    </form>
  )
}

export {
  LoginForm,
}
