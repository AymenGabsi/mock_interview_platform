// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmjUSsCvjbkRfZwITTzImXkA26mWoMPmE",
  authDomain: "hireiq-5b136.firebaseapp.com",
  projectId: "hireiq-5b136",
  storageBucket: "hireiq-5b136.firebasestorage.app",
  messagingSenderId: "199785246770",
  appId: "1:199785246770:web:aeaab23872bc6264c54c2b",
  measurementId: "G-X4FJS6ZWG5",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
