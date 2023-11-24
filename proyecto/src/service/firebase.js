// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhZAHltOsDXW-qEiKxqoYKCvNt-nEkFsg",
  authDomain: "ecommerce-coder-6e605.firebaseapp.com",
  projectId: "ecommerce-coder-6e605",
  storageBucket: "ecommerce-coder-6e605.appspot.com",
  messagingSenderId: "18478701598",
  appId: "1:18478701598:web:b12dce631d99854b81620f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
