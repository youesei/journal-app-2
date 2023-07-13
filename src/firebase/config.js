// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV7_B6bA4FhrIM3uwdKqQppKdFbJ_gGzk",
  authDomain: "journalapp-74bc0.firebaseapp.com",
  projectId: "journalapp-74bc0",
  storageBucket: "journalapp-74bc0.appspot.com",
  messagingSenderId: "840528868127",
  appId: "1:840528868127:web:a29a5341a0f292f617762a"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
