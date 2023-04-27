type InputProps = {
  required?: boolean
  children?: React.ReactNode
  onChange: (event: any) => void
}

import css from './Checkbox.module.css'

const Checkbox = (props: InputProps) => {
  const { children, onChange } = props

  return (
    <label className={css.container}>
      <input
       type="checkbox"
       onChange={onChange}
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
