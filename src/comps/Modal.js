import React from "react";

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
    <div className='modal-backdrop' onClick={divClickHandler}>
      <span class='modal-close'>&times;</span>
      <img src={selectedImage} alt='' />
    </div>
  );
};

export default Modal;
