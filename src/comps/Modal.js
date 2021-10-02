import React from "react";
import { motion } from "framer-motion";

const Modal = ({ selectedImage, setSelectedImage }) => {
  const divClickHandler = (e) => {
    if (
      e.target.classList.contains("modal-backdrop") ||
      e.target.classList.contains("modal-close")
    ) {
      setSelectedImage(null);
    }
  };

  return (
    <motion.div
      className='modal-backdrop'
      onClick={divClickHandler}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <span class='modal-close'>&times;</span>
      <motion.img
        src={selectedImage}
        alt=''
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
};

export default Modal;
