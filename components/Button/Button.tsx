
type ButtonProps = {
    label: string
    type?: 'submit' | 'button' | 'reset'
    onClick: () => void
}

const Button = (props: ButtonProps) => {
    const { label, type, onClick } = props

    return (
        <button type={type} onClick={onClick}>
            {label}
        </button>
    )
}

export {
    Button
}
