import firebase from "firebase";
import "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4m6hvWuj3D-6b26pGsFvsGEYv5vzrJ_g",
  authDomain: "facebook-clone-f800b.firebaseapp.com",
  projectId: "facebook-clone-f800b",
  storageBucket: "facebook-clone-f800b.appspot.com",
  messagingSenderId: "643566643181",
  appId: "1:643566643181:web:d90a31541dd726dd01a9e4",
};

// Initialize Firebase
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

// intialize firestore and storage
const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
