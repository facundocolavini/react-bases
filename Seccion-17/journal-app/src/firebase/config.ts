// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey:"AIzaSyCuh42BwDGok3cfjzhbgTuRsjQ-HLCJopw",
    authDomain:"journalapp-bab0e.firebaseapp.com",
    projectId:"journalapp-bab0e",
    storageBucket:"journalapp-bab0e.appspot.com",
    messagingSenderId:"489898018014",
    appId:"1:489898018014:web:b67cfd1b1757b4c66c2e4f",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);