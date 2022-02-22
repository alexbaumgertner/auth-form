import {Button, Input} from '../../components'


type LoginFormProps = {
    provider: 'local' | 'google'
}

const i18n = {
    email: 'Почта',
    password: 'Пароль',
    login: 'Войти'
}

const LoginForm = (props: LoginFormProps) => {
    return (
        <form>
            <Input label={i18n.email} onInput={() => {
            }} />
            <Input label={i18n.password} type="password" onInput={() => {
            }} />

            <Button label={i18n.login} onClick={() => {
            }} />
        </form>
    )
}

export {
    LoginForm
}
