import css from './Form.module.css'
import { Button } from '../Button'
import { Text } from '../LanguageProvider'

type FormPropsType<T> = {
  children: React.ReactNode
  formData: T
  onSubmit: (formData: T) => void
  state?: 'default' | 'loading' | 'error'
  className?: string
  submitLabel: string
  canBeSubmitted?: boolean
}

function Form<T> ({ children, ...props }: FormPropsType<T>) {
  let stateCss: string = ''

  switch (props.state) {
    case 'loading':
      stateCss = css.loadingState
      break
    case 'error':
      stateCss = css.errorState
      break
    case 'default':
      stateCss = css.defaultState
  }

  return (
    <form
      className={`${css.container} ${props.className ? props.className : ''} ${stateCss}`}
      onSubmit={(event) => {
        event.preventDefault()
        return props.onSubmit(props.formData)
      }}
    >
      {children}
      <div className={css.submit}>
        <Button
          disabled={props.state === 'loading' || props.canBeSubmitted === false}
          label={props.submitLabel}
        />
      </div>
    </form>
  )
}

export {
  Form,
}
