import { initializeApp } from "firebase/app";
import {
  getFirestore
} from "firebase/firestore";

import {
  getAuth
} from "firebase/auth";

import {
  getStorage
} from "firebase/storage";

const firebaseConfig = {
 apiKey: "AIzaSyDN5vWXGWkYLBhcq6su6awCrMA4NuITHaM",
  authDomain: "tk-imam-bukhori.firebaseapp.com",
  projectId: "tk-imam-bukhori",
  storageBucket: "tk-imam-bukhori.firebasestorage.app",
  messagingSenderId: "656947717815",
  appId: "1:656947717815:web:ae15d253fd57aaccd04f32",
  measurementId: "G-40BS4WLQM9"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);