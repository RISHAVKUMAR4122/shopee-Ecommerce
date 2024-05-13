// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyA24BfNi8Q1ubcpDY7Lgx5gLvjE44auLOc",
  authDomain: "myecom-89a15.firebaseapp.com",
  projectId: "myecom-89a15",
  storageBucket: "myecom-89a15.appspot.com",
  messagingSenderId: "92888491595",
  appId: "1:92888491595:web:bef53b71fad62a79218fce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }