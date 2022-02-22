type InputProps = {
    label?: string
    type?: 'text' | 'number' | 'password'
    onInput: () => void
}

const Input = (props: InputProps) => {
    const {label, type = 'text', onInput} = props

    return (
        <div>
            {label}
            <input type={type} onInput={onInput} />
        </div>

    )
}

export {
    Input
}
