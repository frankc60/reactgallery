import { useState, useEffect } from "react";
import {
  projectFirestore,
  onSnapshot,
  collection,
  query,
} from "../firebase_stuff/config";

const useFirestore = (collections) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    //import { collection, query, where, onSnapshot } from "firebase/firestore";

    const q = query(collection(projectFirestore, collections));
    const unsub = onSnapshot(q, (snap) => {
      let documents = [];
      snap.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setDocs(documents);
    });

    //cleanup with a return
    return () => {
      unsub();
    };
  }, [collections]);

  //import { doc, onSnapshot } from "firebase/firestore";

  return { docs };
};

export default useFirestore;
