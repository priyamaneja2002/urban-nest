// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "urbannest-485fc.firebaseapp.com",
  projectId: "urbannest-485fc",
  storageBucket: "urbannest-485fc.appspot.com",
  messagingSenderId: "229310500943",
  appId: "1:229310500943:web:30a7e9860e8a17cfe21a3a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);