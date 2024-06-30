// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbcXN78QKw9_YaTsx_LJX5P0U2i3x551s",
  authDomain: "tkd-ent-cmu.firebaseapp.com",
  databaseURL: "https://tkd-ent-cmu-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tkd-ent-cmu",
  storageBucket: "tkd-ent-cmu.appspot.com",
  messagingSenderId: "258968078691",
  appId: "1:258968078691:web:88384245763fc7977fab56",
  measurementId: "G-X3T1KBEEGL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage  = getStorage(app);

export {fireDb, auth, storage}