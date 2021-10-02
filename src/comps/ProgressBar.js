import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({ file, setFile }) => {
  const { url, progress, error } = useStorage(file);

  console.log(`progress:${progress} - ${url}`);

  useEffect(() => {
    if (url) setFile(null);
  }, [url, setFile]);

  return (
    <div className='progress-bar' style={{ width: progress + "%" }}>
      {progress}%
    </div>
  );
};

export default ProgressBar;
