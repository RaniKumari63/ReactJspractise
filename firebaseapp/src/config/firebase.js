// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBb6Jas2DBRNjPDlJND4G5wtWv_6I42FQ",
  authDomain: "fir-app-c4578.firebaseapp.com",
  projectId: "fir-app-c4578",
  storageBucket: "fir-app-c4578.appspot.com",
  messagingSenderId: "883858426864",
  appId: "1:883858426864:web:94d3c5a7a40cf33e3feb35",
  measurementId: "G-KCYQLQMX2J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app);