// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "portfolio-a8760.firebaseapp.com",
  projectId: "portfolio-a8760",
  storageBucket: "portfolio-a8760.appspot.com",
  messagingSenderId: "387953667788",
  appId: "1:387953667788:web:58dc726fec9aed9eac5c69",
  measurementId: "G-23NDCFFMFQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export const storage = getStorage(app);
export const firestoreInstance = getFirestore(app);
