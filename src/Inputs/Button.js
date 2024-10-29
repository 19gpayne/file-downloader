import './Button.css'

const Button = ({disabled, onClick, variant, children}) => {
    return (
        <button 
            disabled={disabled}
            className={`${variant}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;