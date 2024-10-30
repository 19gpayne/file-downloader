import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { faSquareMinus, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import './Checkbox.css'

const stateToIconMapping = new Map([
    ["check", <FontAwesomeIcon icon={faSquareCheck} size='xl' className='blue-box' data-testid="check" />],
    ["minus", <FontAwesomeIcon icon={faSquareMinus} size='xl' className='blue-box' data-testid="minus" />],
    ["none", <FontAwesomeIcon icon={faSquare} size='xl' data-testid="none" />]
])

const Checkbox = ({onClick, state}) => {

    return (
        <button className="checkbox" onClick={onClick} data-testid="checkbox">
            {stateToIconMapping.get(state)}
        </button>
    )
}

export default Checkbox;