import firebase from "firebase/app";
import "firebase/firestore"; // database
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA9aLyYE0F6QJNTnPtskDw8Ar0LtWP4WXE",
  authDomain: "crwn-db-f0700.firebaseapp.com",
  projectId: "crwn-db-f0700",
  storageBucket: "crwn-db-f0700.appspot.com",
  messagingSenderId: "436552231470",
  appId: "1:436552231470:web:30b8345dda9ec738888dbf",
  measurementId: "G-Q6DBGZV9VV",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
