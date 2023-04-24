type ButtonProps = {
  label: string
  type?: 'submit' | 'button' | 'reset'
  onClick: () => void
}

import css from './Button.module.css'

const Button = (props: ButtonProps) => {
  const { label, type, onClick } = props

  return (
    <button type={type} onClick={onClick} className={css.container} >
      {label}
    </button>
  )
}

export {
  Button,
}
