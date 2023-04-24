import { Button, Input, Checkbox } from '../../components'
import css from './LoginForm.module.css'

type LoginFormProps = {
  provider: 'local' | 'google'
}

/* TODO: use i18n */
const i18n = {
  email: 'Почта',
  emailPlaceholder: 'mail@example.com',
  password: 'Пароль',
  login: 'Войти',
  rememberMe: 'Запомнить',
  createAccount: 'Создать аккаунт',
}

const LoginForm = (props: LoginFormProps) => {
  return (
    <form className={css.container}>
      <div className={css.email}>
        <Input
          required
          name="email"
          label={i18n.email}
          placeholder={i18n.emailPlaceholder}
          onInput={() => {}}
        />
      </div>
      <div className={css.password}>
        <Input
          required
          name="password"
          label={i18n.password}
          type="password"
          onInput={() => {
          }}
        />
      </div>
      <div className={css.rememberMe}>
        <Checkbox>{i18n.rememberMe}</Checkbox>
      </div>

      <div className={css.login}>
        <Button
          label={i18n.login}
          onClick={() => {
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
