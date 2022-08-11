import { initializeApp } from "firebase/app";
// import {getFireStore}from 'firebase/firestore'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDAsiNGOBvSRamx-LMxNvbMjVKVIsvzvmU",
    authDomain: "todoapp-ff3c9.firebaseapp.com",
    projectId: "todoapp-ff3c9",
    storageBucket: "todoapp-ff3c9.appspot.com",
    messagingSenderId: "216475337015",
    appId: "1:216475337015:web:3e6919dee64063f274dab2",
    measurementId: "G-D4E11TGMRX"
  };
  const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)