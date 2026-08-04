import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAStzy7krxiv2ZDGRG-9ZDVjKNfG0j0DqY",
  authDomain: "aalaporan-thamizhan.firebaseapp.com",
  projectId: "aalaporan-thamizhan",
  storageBucket: "aalaporan-thamizhan.firebasestorage.app",
  messagingSenderId: "727449277716",
  appId: "1:727449277716:web:fb1620273d4779502e9e01"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);