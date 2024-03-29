import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyChDyqgpRcFglpJ9IoN4mUFGg55V2oMvPA",
  authDomain: "password-ace08.firebaseapp.com",
  projectId: "password-ace08",
  storageBucket: "password-ace08.appspot.com",
  messagingSenderId: "819312728110",
  appId: "1:819312728110:web:44f6a6b6cc2ca34a3be7bf"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
