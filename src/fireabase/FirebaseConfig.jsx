// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_qWhkKe4kOtQqGCKS6wtFiSny1B2DFWg",
  authDomain: "coral-marker-406415.firebaseapp.com",
  projectId: "coral-marker-406415",
  storageBucket: "coral-marker-406415.appspot.com",
  messagingSenderId: "540110742565",
  appId: "1:540110742565:web:8031378c09a882b8b48bcc",
  measurementId: "G-7B77JGGDMZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}




