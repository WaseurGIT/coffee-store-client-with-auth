// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQE-zNGFcqU714vhy-Z6WIjMV8AWAo2rM",
  authDomain: "coffee-store-f072f.firebaseapp.com",
  projectId: "coffee-store-f072f",
  storageBucket: "coffee-store-f072f.firebasestorage.app",
  messagingSenderId: "329430989844",
  appId: "1:329430989844:web:383b8e62751064576dfb01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth