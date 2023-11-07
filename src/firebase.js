import firebase from "firebase/compat/app";
import "firebase/compat/database";
// import 'firebase/firestore'; // If you are using Firestore

const firebaseConfig = {
  apiKey: "AIzaSyBgZd3aX9nOkDNSO6pUP-9_Cr1Rr_gnwLk",
  authDomain: "smart-farm-19a71.firebaseapp.com",
  databaseURL: "https://smart-farm-19a71-default-rtdb.firebaseio.com", // For Realtime Database
  projectId: "smart-farm-19a71",
  storageBucket: "smart-farm-19a71.appspot.com",
  messagingSenderId: "654817647076",
  appId: "1:654817647076:web:50a32eaa88fb81dbe48ff1",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const db = app.database();
