import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXMfCUd8bUEUep6bjdN3RQSkhzxB_JCi8",
  authDomain: "nyef-membership.firebaseapp.com",
  projectId: "nyef-membership",
  storageBucket: "nyef-membership.firebasestorage.app",
  messagingSenderId: "166740488106",
  appId: "1:166740488106:web:658240a033ac4c024785d3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);