import { useState } from 'react'

import { Button, Input, Text } from '../../components'
import css from './CreateAccountForm.module.css'

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
            label={Text({ tid: 'email' })}
            placeholder={Text({ tid: 'emailPlaceholder' })}
            onInput={(event) => {
              setEmail(event.target.value)
            }}
          />
        </div>
        <div className={css.password}>
          <Input
            required
            name="password"
            label={Text({ tid: 'password' })}
            type="password"
          />
          <Input
            required
            name="passwordSubmit"
            label={Text({ tid: 'passwordSubmit' })}
            type="password"
          />
        </div>
        <div className={css.createAccount}>
          <Button
            className={css.createAccountButton}
            label={Text({ tid: 'createAccount' })}
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

