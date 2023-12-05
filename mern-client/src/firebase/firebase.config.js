// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyiTpQGVAPUNb9Ta-otQz1ntOLbcW8wC8",
  authDomain: "mern-product-inventory.firebaseapp.com",
  projectId: "mern-product-inventory",
  storageBucket: "mern-product-inventory.appspot.com",
  messagingSenderId: "818154875008",
  appId: "1:818154875008:web:2d0e8768f4127cc67c9e65",
  measurementId: "G-TD4RY1EYJ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app