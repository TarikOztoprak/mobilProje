// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-8O-LjeWBhCedNctUsmir410NLOFNvbc",
    authDomain: "kutuphane-c534f.firebaseapp.com",
    projectId: "kutuphane-c534f",
    storageBucket: "kutuphane-c534f.appspot.com",
    messagingSenderId: "612404988483",
    appId: "1:612404988483:web:a3318e5c8e7ffcddd1a2f6"
};

// Initialize Firebase
let app = initializeApp(firebaseConfig);

const auth = getAuth()

export { auth };