// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHZ5TuD4F63txRflseFASz4qI5tnGdJzI",
  authDomain: "vite-contact-a8071.firebaseapp.com",
  projectId: "vite-contact-a8071",
  storageBucket: "vite-contact-a8071.firebasestorage.app",
  messagingSenderId: "898037779176",
  appId: "1:898037779176:web:3ee5a38a7406fce924d75d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
