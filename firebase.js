import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFn3JFro20o7oFykx8A9oHBdFIf1UkjZk",
  authDomain: "signal-clone-42745.firebaseapp.com",
  projectId: "signal-clone-42745",
  storageBucket: "signal-clone-42745.appspot.com",
  messagingSenderId: "554266023718",
  appId: "1:554266023718:web:0d0c01e4dc66b4220a53e7",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
