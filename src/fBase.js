import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDf7MxVENFFjH4MulyStbCewTkheXhs5ZU",
  authDomain: "project-1063871323836008190.firebaseapp.com",
  projectId: "project-1063871323836008190",
  storageBucket: "project-1063871323836008190.appspot.com",
  messagingSenderId: "792829883800",
  appId: "1:792829883800:web:56c3dd450d523f93c067ed",
  measurementId: "G-XBFBQFSGDD",
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const authService = firebase.auth();
