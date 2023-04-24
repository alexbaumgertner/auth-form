type InputProps = {
  required?: boolean
  children?: React.ReactNode
}

import css from './Checkbox.module.css'

const Checkbox = (props: InputProps) => {
  const { children } = props

  return (
    <label className={css.container}>
      <input
       type="checkbox"
      />
      <span>
        {children}
      </span>
    </label>

  )
}

export {
  Checkbox,
}
