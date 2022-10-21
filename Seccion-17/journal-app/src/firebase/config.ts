import { getEnviroments } from './../helpers/getEnviroments';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const env = getEnviroments()

const firebaseConfig = {
    apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_REACT_APP_FIREBASE_PROJECTID,
    storageBucket: import.meta.env.VITE_REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_REACT_APP_FIREBASE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_REACT_APP_FIREBASE_APPID
};

console.log(import.meta.env)
// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);