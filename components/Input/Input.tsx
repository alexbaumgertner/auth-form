type InputProps = {
  required?: boolean
  autoFocus?: boolean
  label?: string
  name?: string
  placeholder?: string
  autoComplete?: string
  type?: 'text' | 'password' | 'email'
  onInput?: (event: any) => void
}

import css from './Input.module.css'

const inputExactValuesAttributes = {
  autoCapitalize: 'off',
  autoCorrect: 'off',
}

const Input = (props: InputProps) => {
  const {
    required,
    label,
    type = 'text',
    onInput,
    placeholder,
    name,
    autoComplete,
  } = props

  const isExactValues = ['password', 'email'].includes(type)

  return (
    <div className={css.container}>
      <label
        className={css.label}
        htmlFor={name}
      >
        {label}:
      </label>
      <input
        className={css.control}
        name={name}
        id={name}
        required={required}
        aria-required={required}
        type={type}
        aria-label={label}
        onInput={onInput}
        placeholder={placeholder}
        autoComplete={autoComplete}
        autoFocus={props.autoFocus}
        {...(isExactValues ? inputExactValuesAttributes : {})}
      />
    </div>

  )
}

export {
  Input,
}
