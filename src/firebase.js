// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxcax3kGdXqSQpLdOH2YC940Tm0Tbent0",
  authDomain: "freind-chat-bde3f.firebaseapp.com",
  databaseURL: "https://freind-chat-bde3f-default-rtdb.firebaseio.com",
  projectId: "freind-chat-bde3f",
  storageBucket: "freind-chat-bde3f.appspot.com",
  messagingSenderId: "320695666427",
  appId: "1:320695666427:web:cfa1b1247c85587f14525e",
  measurementId: "G-FJHV2L4SZG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);