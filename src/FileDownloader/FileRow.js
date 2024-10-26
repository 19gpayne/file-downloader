import { capitalizeFirstLetter } from "../utils";

const FileRow = (props) => {
    return (
        <tr>
            <td><input type="checkbox" /></td>
            <td>{props.file.name}</td>
            <td>{props.file.device}</td>
            <td>{props.file.path}</td>
            <td>{capitalizeFirstLetter(props.file.status)}</td>
        </tr>
    )
}

export default FileRow;