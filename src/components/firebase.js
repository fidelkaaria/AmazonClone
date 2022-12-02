
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCaDMSyhbzOb3jITeUSsum3_AaaxXpIQxg",
  authDomain: "clone-80a36.firebaseapp.com",
  projectId: "clone-80a36",
  storageBucket: "clone-80a36.appspot.com",
  messagingSenderId: "923522071944",
  appId: "1:923522071944:web:37864ad1fd102e7cf04e3d",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };