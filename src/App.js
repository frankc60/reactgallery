import React, { useState } from "react";
import DeleteImage from "./comps/DeleteImage";
import ImageGrid from "./comps/ImageGrid";
import Modal from "./comps/Modal";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [todelete, setTodelete] = useState(false);
  const [delitems, setDelitems] = useState(null);

  return (
    <div className='App'>
      <Title />
      <UploadForm />
      <DeleteImage
        setTodelete={setTodelete}
        delitems={delitems}
        todelete={todelete}
      />
      <ImageGrid
        setSelectedImage={setSelectedImage}
        todelete={todelete}
        setDelitems={setDelitems}
      />
      {selectedImage && (
        <Modal
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
    </div>
  );
}

export default App;
