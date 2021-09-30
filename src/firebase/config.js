// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjojbn2gqVf_3Goyn0genhlUM1Jqb86Yk",
  authDomain: "react-gallery-b7c8e.firebaseapp.com",
  projectId: "react-gallery-b7c8e",
  storageBucket: "react-gallery-b7c8e.appspot.com",
  messagingSenderId: "1049406441445",
  appId: "1:1049406441445:web:c76ce4a6f573c49d09110c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
