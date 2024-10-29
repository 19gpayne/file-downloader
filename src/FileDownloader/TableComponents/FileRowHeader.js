import './FileRowHeader.css'

const FileRowHeader = () => {
    return (
        <tr>
            <th className="col-header bordered"></th>
            <th className="col-header bordered">Name</th>
            <th className="col-header bordered">Device</th>
            <th className="col-header bordered">Path</th>
            <th className="col-header bordered"></th>
            <th className="col-header bordered">Status</th>
        </tr>
    )
}

export default FileRowHeader;