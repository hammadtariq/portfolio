// Import the functions you need from the Firebase SDK
import { initializeApp, FirebaseApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWbkggxOLLVrzfj1jjWt_yBYXxTdOimK8",
  authDomain: "portfolio-a4a60.firebaseapp.com",
  projectId: "portfolio-a4a60",
  storageBucket: "portfolio-a4a60.firebasestorage.app",
  messagingSenderId: "309946818412",
  appId: "1:309946818412:web:e8aafb9165b5d36e3d1d49",
  measurementId: "G-F8PHX3MWDD",
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
getAnalytics(app);

export default app;
