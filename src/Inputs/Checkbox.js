import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { faSquareMinus, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import './Checkbox.css'

const stateToIconMapping = new Map([
    ["check", <FontAwesomeIcon icon={faSquareCheck} size='xl' className='blue-box' />],
    ["minus", <FontAwesomeIcon icon={faSquareMinus} size='xl' className='blue-box' />],
    ["none", <FontAwesomeIcon icon={faSquare} size='xl' />]
])

const Checkbox = ({onClick, state}) => {

    return (
        <button className="checkbox" onClick={onClick}>
            {stateToIconMapping.get(state)}
        </button>
    )
}

export default Checkbox;