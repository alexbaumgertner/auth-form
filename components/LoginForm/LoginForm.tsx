import {Button, Input} from '../../components'


type LoginFormProps = {
    provider: 'local' | 'google'
}

const i18n = {
    email: 'Почта',
    password: 'Пароль',
    login: 'Войти',
    saveLogin: 'Запомнить?',
}

const LoginForm = (props: LoginFormProps) => {
    return (
        <form>
            <Input required label={i18n.email} onInput={() => {
            }} />
            <Input required label={i18n.password} type="password" onInput={() => {
            }} />

            <Input label={i18n.saveLogin} type="checkbox" onInput={() => {
            }} />

            <Button label={i18n.login} onClick={() => {
            }} />
        </form>
    )
}

export {
    LoginForm
}
