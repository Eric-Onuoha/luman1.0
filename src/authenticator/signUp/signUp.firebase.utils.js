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
    apiKey: "AIzaSyDfBhAMiVeEGR_79hy8WcOyOLAefCvTSlE",  
    authDomain: "womeninpoliticsforumsite.firebaseapp.com",  
    projectId: "womeninpoliticsforumsite",  
    storageBucket: "womeninpoliticsforumsite.appspot.com",  
    messagingSenderId: "304906877555",  
    appId: "1:304906877555:web:b79ecaf0327678847b0806",  
    measurementId: "G-W16E91HVYN"
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