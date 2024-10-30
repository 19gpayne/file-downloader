import './Button.css'

const Button = ({disabled, onClick, variant, children}) => {
    return (
        <button 
            disabled={disabled}
            className={`${variant}`}
            onClick={onClick}
            data-testid="button"
        >
            {children}
        </button>
    )
}

export default Button;