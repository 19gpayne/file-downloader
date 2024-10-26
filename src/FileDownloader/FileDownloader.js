import React, { useState } from 'react';
import FileRow from './FileRow';
import {files} from './files';
import './FileDownloader.css';

const FileDownloader = () => {

    return (
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Device</th>
                    <th>Path</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {files.map(file => {
                    return (
                        <FileRow key={file.name} selected={selectedRows.includes(file.path)} file={file}/>
                    )
                })}
            </tbody>
        </table>
    )
}

export default FileDownloader;