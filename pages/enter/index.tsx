import type {NextPage} from 'next'
import {LoginForm} from '../../components'

const Enter: NextPage = () => {
    return (
        <div>
            Enter Page
            <LoginForm provider="local" />
        </div>
    )
}

export default Enter
