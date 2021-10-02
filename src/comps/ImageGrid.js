import React from "react";
import useFirestore from "../hooks/useFirestore";

const ImageGrid = () => {
  const { docs } = useFirestore("images");
  console.log(docs);

  return (
    <div className='image-grid'>
      {docs &&
        docs.map((image) => {
          return (
            <div className='image-wrap' key={image.id}>
              <img src={image.url} alt='created:{image.created}' />
            </div>
          );
        })}
    </div>
  );
};

export default ImageGrid;
