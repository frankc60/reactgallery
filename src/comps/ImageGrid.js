/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImage, todelete, setDelitems }) => {
  const { docs } = useFirestore("images");
  console.log(docs);

  const onImgClick = (image) => {
    if (!todelete) {
      setSelectedImage(image.url);
    } else {
      setDelitems(image);
    }
  };

  return (
    <div className='image-grid'>
      {docs &&
        docs.map((image) => {
          return (
            <motion.div
              whileHover={{ opacity: 1 }}
              layout
              className='image-wrap'
              key={image.id}
              onClick={() => onImgClick(image)}
            >
              <motion.img
                src={image.url}
                alt={image.created}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
          );
        })}
    </div>
  );
};

export default ImageGrid;
