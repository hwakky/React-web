import React, { useState } from "react";

const FileUpLoad=() => {
    const [file, setFile] = useState()

    function handleFile(event) {
        setFile(event.target.files[0])
        console.log(file)
    }
    
    return (
        <div>
            <h2>File Uploading in React JS</h2>
            <form>
                <input type="file" name="file" onChange={handleFile}/>
                <button>Upload</button>
            </form>
        </div>
    )
}

export default FileUpLoad