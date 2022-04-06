// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSBKZXhV8Rrw4AG_PpURA3nJcLgBzbjwA",
  authDomain: "simple-authentication-cb7fe.firebaseapp.com",
  projectId: "simple-authentication-cb7fe",
  storageBucket: "simple-authentication-cb7fe.appspot.com",
  messagingSenderId: "271862333647",
  appId: "1:271862333647:web:3a2c8187c9c03a138477ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;