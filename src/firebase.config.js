import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"



const firebaseConfig = {
  apiKey: "AIzaSyDj9diPwwbI_dqVZ_MsHTK7cfWUsUwDysM",
  authDomain: "my-recipes-bec28.firebaseapp.com",
  projectId: "my-recipes-bec28",
  storageBucket: "my-recipes-bec28.appspot.com",
  messagingSenderId: "443335640205",
  appId: "1:443335640205:web:1686e12992266d5f16cec4",
  measurementId: "G-TGWNZZT1EJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 

const auth = getAuth(app)

export { auth }