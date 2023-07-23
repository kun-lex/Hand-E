import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQhur1y9CjVK4Feh-vF2WJH9u6RNSkKwM",
  authDomain: "reba-e0aaa.firebaseapp.com",
  projectId: "reba-e0aaa",
  storageBucket: "reba-e0aaa.appspot.com",
  messagingSenderId: "221346756434",
  appId: "1:221346756434:web:5bf169bfc5f2c965e76c8b",
  measurementId: "G-V34VTJZD82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();
const auth = getAuth();
const storage = getStorage();

export { db, auth, storage }