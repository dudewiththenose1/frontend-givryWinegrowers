import { useState } from "react";

function FileUploader({ submit }) {
    const [file, setFile] = useState();

    return (
        <div className="row">
            <form onSubmit={e => submit(e, file)}>
                <input
                    
                    onChange={e => setFile(e.target.files[0])}
                    type="file"
                    name="file"
                    accept="image/*"
                ></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default FileUploader;
