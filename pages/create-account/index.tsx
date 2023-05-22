import { NextPage } from 'next'
import { CreateAccountForm } from '../../components'

import css from './create-account.module.css'

const CreateAccount: NextPage = () => {

  return (
    <div className={css.page}>
      <CreateAccountForm
        onSubmit={async (loginData) => {
          const loginResponse = await fetch(
            '/api/auth/signin',
            {
              method: 'post',
              body: JSON.stringify(loginData),
            })

          if (loginResponse.status === 200) {} else {}

        }}
        className={css.form}
      />
    </div>
  )
}

export default CreateAccount
