// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDNeri-cfrwHeJ3Vfe2eqWQ2iHaZKqPrO0",
    authDomain: "epl-project-e9465.firebaseapp.com",
    projectId: "epl-project-e9465",
    storageBucket: "epl-project-e9465.firebasestorage.app",
    messagingSenderId: "832590423993",
    appId: "1:832590423993:web:0a5e3babee88561675b868",
    measurementId: "G-0K12XRJ04V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
