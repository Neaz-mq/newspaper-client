// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHitLS0vjVjVt3VZFDnb0hq3QlQsK4OcA",
  authDomain: "news-b1a26.firebaseapp.com",
  projectId: "news-b1a26",
  storageBucket: "news-b1a26.appspot.com",
  messagingSenderId: "623834211646",
  appId: "1:623834211646:web:0fa01a463a23e773f6386f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;