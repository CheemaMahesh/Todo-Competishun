import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwfanrujmTWp6wmxQ5zbWXZIaKZUKpUR4",
  authDomain: "todolist-31373.firebaseapp.com",
  projectId: "todolist-31373",
  storageBucket: "todolist-31373.appspot.com",
  messagingSenderId: "634284710182",
  appId: "1:634284710182:web:1dff9d2634722e6ab349e7"
};

const app = initializeApp(firebaseConfig,"app");

export const auth = getAuth(app);
export const db=getFirestore(app);

