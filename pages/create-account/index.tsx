import { NextPage } from 'next'
import { Button, Input, Checkbox } from '../../components'
import { useState } from 'react'

/* TODO: use i18n */
const i18n = {
  email: 'Почта',
  emailPlaceholder: 'mail@example.com',
  resetPassword: 'Сбросить пароль'
}

const CreateAccount: NextPage = () => {
  const [email, setEmail] = useState('')

  return (
    <div>
      <form
        onSubmit={(event) => { event.preventDefault() }}
      >
      <Input
        required
        name="email"
        label={i18n.email}
        placeholder={i18n.emailPlaceholder}
        onInput={(event) => {
          setEmail(event.target.value)
        }}
      />
      <Button
        label={i18n.resetPassword}
        onClick={() => {
        }}
      />
      </form>
    </div>
  )
}

export default CreateAccount
