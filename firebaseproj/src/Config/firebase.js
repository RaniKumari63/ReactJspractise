// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore/lite'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACkGK63j33BilopIDcy1A_VR5b9pGa-RE",
  authDomain: "fir-proj-7584b.firebaseapp.com",
  projectId: "fir-proj-7584b",
  storageBucket: "fir-proj-7584b.appspot.com",
  messagingSenderId: "919294288470",
  appId: "1:919294288470:web:9a4703065e547b251991f7",
  measurementId: "G-VE8EKGJRFJ"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db=getFirestore(app);