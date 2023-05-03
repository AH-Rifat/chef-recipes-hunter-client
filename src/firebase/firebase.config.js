// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf1GftydHXRGTCL55HXVOMnL0pmLNl9j0",
  authDomain: "shef-recipes-hunter.firebaseapp.com",
  projectId: "shef-recipes-hunter",
  storageBucket: "shef-recipes-hunter.appspot.com",
  messagingSenderId: "502943940653",
  appId: "1:502943940653:web:fc568589bdf332436338a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app