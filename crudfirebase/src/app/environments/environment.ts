// Import the functions you need from the SDKs you need
// src/environments/environment.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkGkV4oXkdeDwFY55uINksLFciuwu1yt4",
  authDomain: "angularteste-46885.firebaseapp.com",
  projectId: "angularteste-46885",
  storageBucket: "angularteste-46885.appspot.com",
  messagingSenderId: "61820951445",
  appId: "1:61820951445:web:3b9e151da1fa0c5ff4b49c",
  measurementId: "G-8WSJCPSC4E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
