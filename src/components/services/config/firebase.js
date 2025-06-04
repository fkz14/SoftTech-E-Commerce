import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-TqVeg98EbXyAmpg3LJOv2MXCTJH5jdc",
  authDomain: "softtech-e-commerce-254a0.firebaseapp.com",
  projectId: "softtech-e-commerce-254a0",
  storageBucket: "softtech-e-commerce-254a0.firebasestorage.app",
  messagingSenderId: "41442860525",
  appId: "1:41442860525:web:023b8974fa8e6919a15be4",
  measurementId: "G-T4332TQBJ9",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
