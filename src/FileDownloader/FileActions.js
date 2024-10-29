import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import Checkbox from '../Inputs/Checkbox';
import Button from '../Inputs/Button';
import './FileActions.css';

const FileActions = ({selectedRows, selectAll, files}) => {

    const showAlert = () => {
        if (selectedRows.size > 0) {
            let message = `Download processing for...\n\n`
            selectedRows.forEach(file => {
                return message += file.device + ": " + file.path + "\n"
            })
            alert(message)
        }
    }

    const preventDownload = Array.from(selectedRows).some(rowData => rowData.status.toLowerCase() !== "available");

    const checkState = 
        selectedRows.size === 0 ? "none" : selectedRows.size > 0 && selectedRows.size < files.length ? "minus" : "check";

    return (
        <tr>
            <td colSpan={100}> 
                <div className="header">
                    <div className="selection">
                        <Checkbox onClick={selectAll} state={checkState} />
                        {selectedRows.size > 0 ? `Selected ${selectedRows.size}` : `None Selected`}
                    </div>

                    <div className='actions'>
                        <Button disabled={selectedRows.size === 0 || preventDownload} onClick={showAlert} variant={"text-button"}>
                            <FontAwesomeIcon icon={faDownload} /> Download Selected
                        </Button>
                        {preventDownload &&
                            <div className="warning">
                                <FontAwesomeIcon icon={faTriangleExclamation} /> Files must be available
                            </div>
                        }
                    </div>
                </div>
            </td>
        </tr>
    )
}

export default FileActions;