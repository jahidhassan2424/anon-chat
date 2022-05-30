// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB9z8bjZ328qIoP-oVH8niXEsQZsOwbAg0",
    authDomain: "anon-chat-c8acd.firebaseapp.com",
    projectId: "anon-chat-c8acd",
    storageBucket: "anon-chat-c8acd.appspot.com",
    messagingSenderId: "685317726430",
    appId: "1:685317726430:web:8aa8fb953288529b97224f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;