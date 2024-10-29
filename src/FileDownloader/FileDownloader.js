import React, { useState } from 'react';
import FileRow from './TableComponents/FileRow';
import {files} from '../data/files';
import './FileDownloader.css';
import FileRowHeader from './TableComponents/FileRowHeader';
import FileActions from './FileActions';

const FileDownloader = () => {
    const [selectedRows, setSelectedRows] = useState(new Set())

    const select = (file) => {
        const currentRows = new Set(selectedRows);
        currentRows.has(file) ? currentRows.delete(file) : currentRows.add(file)
        setSelectedRows(currentRows)
    }

    const selectAll = () => {
        if (selectedRows.size < files.length) {
            setSelectedRows(new Set(files))
        } else {
            setSelectedRows(new Set())
        }
    }

    return (
        <div>
            <table className="bordered bordered-full">
                <thead>
                    <FileActions selectedRows={selectedRows} selectAll={selectAll} files={files} />
                    <FileRowHeader />
                </thead>
                <tbody>
                    {files.map(file => {
                        return (
                            <FileRow 
                                key={file.name} 
                                select={(file) => {select(file)}}
                                selected={selectedRows.has(file)} 
                                file={file}
                            />
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default FileDownloader;