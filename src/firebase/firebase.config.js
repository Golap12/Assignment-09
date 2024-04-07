// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa4c2HIh5JgWYtx6pHb66Bcz76eaZZGjQ",
  authDomain: "assignment-9-73e6d.firebaseapp.com",
  projectId: "assignment-9-73e6d",
  storageBucket: "assignment-9-73e6d.appspot.com",
  messagingSenderId: "76851254260",
  appId: "1:76851254260:web:c9afedce0d42139c849fa1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// const auth = getAuth(app);