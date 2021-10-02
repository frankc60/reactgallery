import ProgressBar from "./ProgressBar";
import React, { useState } from "react";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const changeHandler = (e) => {
    //

    const selected = e.target.files[0];
    console.log(selected);

    const type = ["image/png", "image/jpeg"];

    if (selected && type.includes(selected.type)) {
      setError(null);
      setFile(selected);
    } else {
      setFile(null);
      setError("Please select a valid Image file type");
    }
  };

  return (
    <form>
      <label>
        <input type='file' onChange={changeHandler} />
        <span>+</span>
      </label>
      <div className='output'>
        {file && <div>{file.name}</div>}
        {error && <div className='error'>{error}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
