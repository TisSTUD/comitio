import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  updateProfile,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  addDoc,
  collection,
  deleteDoc,
  getDocs,
  query,
  where,
  orderBy,

} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDW_faVOz8qxMO5t9syh9WKiTmi2n4hxuQ",
  authDomain: "auth-react-c6c2f.firebaseapp.com" ,
  projectId: "auth-react-c6c2f",
  storageBucket: "auth-react-c6c2f.appspot.com",
  messagingSenderId: "629137627477",
  appId: "1:629137627477:web:3e737b13212941862137dc",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);







