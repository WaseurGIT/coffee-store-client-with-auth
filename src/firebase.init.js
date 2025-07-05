// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_Id,
  appId: import.meta.env.VITE_FIREBASE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth


/**
 * 1. firebase-tools (one time)
 * 2. firebase login (one time)
 * 3. firebase logout
 * 4. firebase login
 * 5. one time for each project : firebase init
 * 6. what you want to do : select hosting
 * 7. select a project (already have one created in firebase console)
 * 8. what will be your public : dist
 * 9. single page? : yes 
 * 
 * ---------------
 * each time you want to deploy
 * 10. npm run build
 * 11. firebase deploy
 */