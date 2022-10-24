// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtPvV4uvLHcXMkiowjt1gxCvm0xCW2lpY",
  authDomain: "fir-authentication-react-eee2e.firebaseapp.com",
  projectId: "fir-authentication-react-eee2e",
  storageBucket: "fir-authentication-react-eee2e.appspot.com",
  messagingSenderId: "1031658934614",
  appId: "1:1031658934614:web:25594ce8a835a2f94a46f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const loginWithEmailAndPassword = async (email, password)=>{
 try {
    await signInWithEmailAndPassword(auth,email, password)
 } catch (error) {
  console.log(error);
  alert(error.message);
 }
}

const registerWithEmailAndPassword = async (email, password)=>{
  try {
     await createUserWithEmailAndPassword(auth,email, password)
  } catch (error) {
   console.log(error);
   alert(error.message);
  }
 }

const logout = ()=>{
  signOut(auth);
}

export {auth, registerWithEmailAndPassword, loginWithEmailAndPassword, logout}