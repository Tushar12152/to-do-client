// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADkYFOb5ulSMXpK180_sz853CpWzA42Uw",
  authDomain: "wedding-event-management-f2d82.firebaseapp.com",
  projectId: "wedding-event-management-f2d82",
  storageBucket: "wedding-event-management-f2d82.appspot.com",
  messagingSenderId: "869193857109",
  appId: "1:869193857109:web:cdeb7a08a773d11cb13cdc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;