import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"



const firebaseConfig = {
  apiKey: "AIzaSyCzhTHXATzA6sOeb6PnOezlr3H0UkXb48s",
  authDomain: "react-fire-auth-e0e39.firebaseapp.com",
  projectId: "react-fire-auth-e0e39",
  storageBucket: "react-fire-auth-e0e39.appspot.com",
  messagingSenderId: "987273192340",
  appId: "1:987273192340:web:5fe0479989ebe8539e6581"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
 

const auth = getAuth(app)

export { auth }