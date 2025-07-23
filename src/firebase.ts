// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXHeTox7R1SjPXnapBmBnUB-vf8wOGOYY",
  authDomain: "ma3-app.firebaseapp.com",
  projectId: "ma3-app",
  storageBucket: "ma3-app.firebasestorage.app",
  messagingSenderId: "649142218680",
  appId: "1:649142218680:web:9995be97323212ef75694d",
  measurementId: "G-T45HCEP8X4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
