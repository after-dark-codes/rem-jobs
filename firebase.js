// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYqeq9ND4My3uFQLwtNOSpNDfsLhODVrE",
  authDomain: "rem-jobs.firebaseapp.com",
  projectId: "rem-jobs",
  storageBucket: "rem-jobs.appspot.com",
  messagingSenderId: "354691501866",
  appId: "1:354691501866:web:b54bd4508966ae3ceb9853",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
