import { initializeApp } from 'firebase/app';
import {
  getAuth,
    createUserWithEmailAndPassword,
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
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

  export const createAccount = async (email, password) =>{
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
   
  }  

  export const getUserDocFromAuth = async(userAuth, username)=>{
    const userRef = doc(db,"Users", userAuth.uid);
    const usersDbSnapshot = await getDoc(userRef);
    
    if(!usersDbSnapshot.exists()){
      const {email} = userAuth;
      const createdAt = new Date();

      try{
        const setSnap = await setDoc(userRef, {
          username,
          email,
          createdAt
          });

          alert("account created succesfully");
      } catch(err){
        console.log(err.message);
        alert("Problem creating account", err.message);
      }
    }
  }