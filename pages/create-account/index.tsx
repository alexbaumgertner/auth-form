import { NextPage } from 'next'
import { CreateAccountForm } from '../../components'

import css from './create-account.module.css'

const CreateAccount: NextPage = () => {

  return (
    <div className={css.page}>
      <CreateAccountForm
        onSubmit={() => { }}
        className={css.form}
      />
    </div>
  )
}

export default CreateAccount
