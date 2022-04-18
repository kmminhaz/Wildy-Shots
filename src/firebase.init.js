// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQz-gsRZpFTWzD2JhstMBmaR22rgaEgBw",
  authDomain: "wild-photographer-2ea91.firebaseapp.com",
  projectId: "wild-photographer-2ea91",
  storageBucket: "wild-photographer-2ea91.appspot.com",
  messagingSenderId: "149927366087",
  appId: "1:149927366087:web:db5178c84fe23d310f9de2",
  measurementId: "G-0N40FM49CR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
