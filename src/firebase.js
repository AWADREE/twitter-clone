import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCB5P_SzBiY-pavmIgscM514LFZXEOtXm4",
  authDomain: "twitter-clone-1ae9a.firebaseapp.com",
  projectId: "twitter-clone-1ae9a",
  storageBucket: "twitter-clone-1ae9a.appspot.com",
  messagingSenderId: "988574399168",
  appId: "1:988574399168:web:8f7420d4eca273055ccb25",
  measurementId: "G-3EBW0L3PFR",
};

//we create a pocket and export it to pull it in from any other place
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
