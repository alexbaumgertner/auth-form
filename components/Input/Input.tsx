type InputProps = {
    required?: boolean
    label?: string
    type?: 'text' | 'number' | 'password' | 'checkbox'
    onInput: () => void
}

const Input = (props: InputProps) => {
    const {required, label, type = 'text', onInput} = props

    return (
        <div>
            <label htmlFor="">{label}</label>
            <input
                required={required}
                aria-required={required}
                type={type}
                aria-label={label}
                onInput={onInput}
            />
        </div>

    )
}

export {
    Input
}
