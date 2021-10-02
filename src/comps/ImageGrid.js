/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import useFirestore from "../hooks/useFirestore";

const ImageGrid = ({ setSelectedImage }) => {
  const { docs } = useFirestore("images");
  console.log(docs);

  return (
    <div className='image-grid'>
      {docs &&
        docs.map((image) => {
          return (
            <div
              className='image-wrap'
              key={image.id}
              onClick={() => setSelectedImage(image.url)}
            >
              <img src={image.url} alt={image.created} />
            </div>
          );
        })}
    </div>
  );
};

export default ImageGrid;
