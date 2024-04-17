// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
 import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnzRt9wlUVclaFiFrUq6_yXIk3hcSUH-Y",
  authDomain: "bellacasa-ecommerce.firebaseapp.com",
  projectId: "bellacasa-ecommerce",
  storageBucket: "bellacasa-ecommerce.appspot.com",
  messagingSenderId: "535680438442",
  appId: "1:535680438442:web:b0b97e9b01bd898ffe40d3"
}; 

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db= getFirestore(app);
export const storage = getStorage(app);
export default app;