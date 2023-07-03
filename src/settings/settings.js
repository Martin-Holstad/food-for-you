// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref as ref_database, push } from "firebase/database";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjg5Kmh5g_uEEnKIiONs0pr0L5-9PVkBE",
  authDomain: "food-for-you-19577.firebaseapp.com",
  databaseURL: "https://food-for-you-19577-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "food-for-you-19577",
  storageBucket: "food-for-you-19577.appspot.com",
  messagingSenderId: "599098794539",
  appId: "1:599098794539:web:9454baaa614667a94b006e",
  measurementId: "G-RNP39JQSGB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
export const auth = getAuth(app)
export const storage = getStorage(app)
