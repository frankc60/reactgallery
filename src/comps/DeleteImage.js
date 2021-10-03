import React, { useEffect } from "react";
import { doc, deleteDoc, projectFirestore } from "../firebase_stuff/config";

const DeleteImage = ({ setTodelete, delitems, todelete }) => {
  const buttonClickHandler = (e) => {
    console.log("button delete clicked");
    setTodelete(!todelete);
  };

  useEffect(() => {
    const delImage = async (img) => {
      if (img) {
        const docRef = doc(projectFirestore, "images/" + img.id);

        await deleteDoc(docRef);
        console.log("image deleted from FIRESTORE: " + img.url);

        //import { getStorage, ref, deleteObject } from "firebase/storage";

        //  const storage = getStorage();

        // Create a reference to the file to delete
        //   const desertRef = ref(projectStorage, "images/desert.jpg");

        // Delete the file
        //   deleteObject(desertRef)
        //     .then(() => {
        //       // File deleted successfully
        //     })
        //     .catch((error) => {
        //       // Uh-oh, an error occurred!
        //     });
        // }
      }
    };
    delImage(delitems);
  }, [delitems]);

  return (
    <div>
      <button onClick={buttonClickHandler}>Delete</button>
      {todelete && <h2>DELETE IMAGES</h2>}
      {!todelete && <h2>SELECT IMAGE TO ZOOM</h2>}
    </div>
  );
};

export default DeleteImage;
