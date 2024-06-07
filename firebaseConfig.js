// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvDxKai74FhBvV145uYWif-O_IOe4EZR0",
  authDomain: "naviagtion-7c462.firebaseapp.com",
  projectId: "naviagtion-7c462",
  storageBucket: "naviagtion-7c462.appspot.com",
  messagingSenderId: "403584687698",
  appId: "1:403584687698:web:a49ca89b1a56cf1bfa898b",
  measurementId: "G-5560J5H43R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth, GoogleAuthProvider, signInWithPopup, signOut };
