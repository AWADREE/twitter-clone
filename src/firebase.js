import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCB5P_SzBiY-pavmIgscM514LFZXEOtXm4",
  authDomain: "twitter-clone-1ae9a.firebaseapp.com",
  databaseURL: "https://twitter-clone-1ae9a-default-rtdb.firebaseio.com",
  projectId: "twitter-clone-1ae9a",
  storageBucket: "twitter-clone-1ae9a.appspot.com",
  messagingSenderId: "988574399168",
  appId: "1:988574399168:web:8f7420d4eca273055ccb25",
  measurementId: "G-3EBW0L3PFR",
});

const db = firebase.firestore();
export const auth = app.auth();
export default app;
export const dbp = db.collection("posts");
