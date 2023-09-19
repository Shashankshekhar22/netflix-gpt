// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByEIJYEQ0QlOx_cy-Oo7J1ypFwNyxM34E",
  authDomain: "netflixgpt-38f8c.firebaseapp.com",
  projectId: "netflixgpt-38f8c",
  storageBucket: "netflixgpt-38f8c.appspot.com",
  messagingSenderId: "602027973502",
  appId: "1:602027973502:web:259acd8ea3bfd5fd84b12f",
  measurementId: "G-FN0FT51QG3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
