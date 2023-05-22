type ButtonProps = {
  label: string
  type?: 'submit' | 'button' | 'reset'
  onClick?: () => void
  className?: string
  disabled?: boolean
}

import css from './Button.module.css'

const Button = (props: ButtonProps) => {
  const { label, type, onClick, disabled } = props

  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`${css.container} ${props.className ? props.className : ''}`}
    >
      {label}
    </button>
  )
}

export {
  Button,
}
