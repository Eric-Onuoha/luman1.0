import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from 'firebase/auth';

import {
  getFirestore,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCk5WKouY5P-EvbUnK_pZqqizCKDmMpAjQ",
  authDomain: "lumen-4a58b.firebaseapp.com",
  projectId: "lumen-4a58b",
  storageBucket: "lumen-4a58b.appspot.com",
  messagingSenderId: "615607356284",
  appId: "1:615607356284:web:2b29d4ccf46f924a80b2f9",
  measurementId: "G-PLFHCJHKDK"
  };

  const firebaseapp = initializeApp(firebaseConfig);

  export const auth = getAuth();

  export const db = getFirestore();

  export const signIn = async (email, password) =>{
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
  }  

  export const monitorAuthState = (cb) => {
    onAuthStateChanged(auth, cb);
  }


