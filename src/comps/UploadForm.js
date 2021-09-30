import React, { useState } from "react";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const changeHandler = (e) => {
    //
    setError(null);
    const selected = e.target.files[0];
    console.log(selected);

    const type = ["image/png", "image/jpeg"];

    if (selected && type.includes(selected.type)) {
      setFile(selected);
    } else {
      setFile(null);
      setError("Please select a valid Image file type");
    }
  };

  return (
    <div>
      <input type='file' onChange={changeHandler} />
      {file ? file.name : null}
      {error}
    </div>
  );
};

export default UploadForm;
