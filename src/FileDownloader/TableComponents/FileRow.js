import Checkbox from "../../Inputs/Checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { capitalizeFirstLetter } from "../../utils";
import './FileRow.css'

const FileRow = ({file, selected, select}) => {
    return (
        <tr className={`file-row ${selected && 'selected-row'}`} onClick={() => {select(file)}}>
            <td className="bordered end-cell">
                <Checkbox state={selected ? "check" : "none"} />
            </td>
            <td className="bordered middle-cell">{file.name}</td>
            <td className="bordered middle-cell">{file.device}</td>
            <td className="bordered middle-cell">{file.path}</td>
            <td className="bordered status-cell">{
                file.status.toLowerCase() === "available" && 
                    <FontAwesomeIcon icon={faCircle} className="status-indicator" />
            }</td>
            <td className="bordered end-cell">
                {capitalizeFirstLetter(file.status)}
            </td>
        </tr>
    )
}

export default FileRow;