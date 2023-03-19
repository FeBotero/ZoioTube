// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmSdyWIeu41eKqe9K00vsBWy4DJSht_GM",
  authDomain: "zoiotube.firebaseapp.com",
  projectId: "zoiotube",
  storageBucket: "zoiotube.appspot.com",
  messagingSenderId: "1058329401798",
  appId: "1:1058329401798:web:b07caa48130ed9cf013ac7",
  measurementId: "G-L68JDMSFES",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
