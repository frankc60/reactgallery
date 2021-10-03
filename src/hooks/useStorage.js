import { useState, useEffect } from "react";

import {
  projectStorage,
  projectFirestore as db,
  ref,
  getDownloadURL,
  uploadBytesResumable,
  addDoc,
  collection,
  firebaseServerTime,
} from "../firebase_stuff/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(null);

  const dbStuff = async (db, file, downloadurl) => {
    // Add a second document with a generated ID.

    try {
      const docRef = await addDoc(collection(db, "images"), {
        url: downloadurl,
        created: firebaseServerTime,
        file: file.name,
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  useEffect(() => {
    const storageRef = ref(projectStorage, file.name);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress + "%");
        setProgress(progress);
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            console.log("error state: " + snapshot.state);
        }
      },
      (error) => {
        // Handle unsuccessful uploads
        setError(error);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setUrl(downloadURL);
          dbStuff(db, file, downloadURL);
        });
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
