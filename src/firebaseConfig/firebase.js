// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEhJzi3zLOI-XOPHN0aTOzYWZqaoRTGUo",
  authDomain: "crudjquinde.firebaseapp.com",
  projectId: "crudjquinde",
  storageBucket: "crudjquinde.appspot.com",
  messagingSenderId: "245868966555",
  appId: "1:245868966555:web:cb580c461c045844874c3e",
  measurementId: "G-5XC849STDF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);