import { useState } from 'react'

import { Text } from '../../components'

type InputProps = {
  required?: boolean
  autoFocus?: boolean
  disabled?: boolean
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
    disabled,
  } = props

  const isExactValues = ['password', 'email'].includes(type)

  const [showPassword, setShowPassword] = useState(false)

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
        disabled={disabled}
        required={required}
        aria-required={required}
        type={type !== 'password' ? type : showPassword ? 'text' : 'password'}
        aria-label={label}
        onInput={onInput}
        placeholder={placeholder}
        autoComplete={autoComplete}
        autoFocus={props.autoFocus}
        {...(isExactValues ? inputExactValuesAttributes : {})}
      />
      {type === 'password' && (
        <button
          title={showPassword ? Text({ tid: 'hidePassword' }) : Text({ tid: 'showPassword' })}
          className={css.showPasswordButton}
          type="button"
          onClick={() => {
            setShowPassword((currentShowPasswordValue) => !currentShowPasswordValue)
          }}
        >
          {showPassword ? '🙈' : '👀'}
        </button>
      )}
    </div>

  )
}

export {
  Input,
}
