// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "auth-sample-6308b.firebaseapp.com",
  projectId: "auth-sample-6308b",
  storageBucket: "auth-sample-6308b.appspot.com",
  messagingSenderId: "806142139075",
  appId: "1:806142139075:web:eab98e0658c24689f3a076"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);