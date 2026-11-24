
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQIrAlLpiVXmzX6XejLb1QSPN0IbOa7pw",
  authDomain: "ayohealth-ayodhya-2026.firebaseapp.com",
  projectId: "ayohealth-ayodhya-2026",
  storageBucket: "ayohealth-ayodhya-2026.firebasestorage.app",
  messagingSenderId: "49366400140",
  appId: "1:49366400140:web:a7b9873d81a23744cccfa9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
