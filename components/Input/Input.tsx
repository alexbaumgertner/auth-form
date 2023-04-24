type InputProps = {
  required?: boolean
  label?: string
  name?: string
  placeholder?: string
  type?: 'text' | 'password'
  onInput: () => void
}

import css from './Input.module.css'

const Input = (props: InputProps) => {
  const { required, label, type = 'text', onInput, placeholder, name } = props

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
      />
    </div>

  )
}

export {
  Input,
}
