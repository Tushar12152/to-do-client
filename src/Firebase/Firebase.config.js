

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_SPPWuzW2AnTLl6OUFCeNKIA1FdmZ6Nk",
  authDomain: "to-do-app-5e494.firebaseapp.com",
  projectId: "to-do-app-5e494",
  storageBucket: "to-do-app-5e494.appspot.com",
  messagingSenderId: "829911367259",
  appId: "1:829911367259:web:e82be3c8e389a44cb8097e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;