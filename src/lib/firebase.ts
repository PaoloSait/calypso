// Import the functions you need from the SDKs you need
import { initializeApp, getApps, deleteApp, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD7c_NEH9RLhtvu6Mvl8BAPb1ruNJ8jG2Q",
    authDomain: "v3studio-f7586.firebaseapp.com",
    projectId: "v3studio-f7586",
    storageBucket: "v3studio-f7586.appspot.com",
    messagingSenderId: "622404546277",
    appId: "1:622404546277:web:1628198536be13af7a2e0c",
    measurementId: "G-KMPRPVX8S3"
};

// Initialize Firebase
let app;
if (!getApps().length) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApp();
    deleteApp(app);
    app = initializeApp(firebaseConfig);
}

export const db = getFirestore(app);