// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDew2T-s3SS_1aKv6y1-N66lxxu9reTXmA",
  authDomain: "ng-store-a4630.firebaseapp.com",
  projectId: "ng-store-a4630",
  storageBucket: "ng-store-a4630.appspot.com",
  messagingSenderId: "172698678926",
  appId: "1:172698678926:web:21f70b2165a976f9a13bdf",
  measurementId: "G-QBBNRFKGKW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);