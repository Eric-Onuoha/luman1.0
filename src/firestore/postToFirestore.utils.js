import { initializeApp } from "firebase/app";
import objectHash from "object-hash";
import {v4} from "uuid";
import {getStorage, getDownloadURL, ref, uploadBytesResumable, uploadBytes} from "firebase/storage";

import {
  getFirestore,
  doc,
  setDoc,
} from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCk5WKouY5P-EvbUnK_pZqqizCKDmMpAjQ",
  authDomain: "lumen-4a58b.firebaseapp.com",
  projectId: "lumen-4a58b",
  storageBucket: "lumen-4a58b.appspot.com",
  messagingSenderId: "615607356284",
  appId: "1:615607356284:web:2b29d4ccf46f924a80b2f9",
  measurementId: "G-PLFHCJHKDK"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const Storage = getStorage(app);

const analytics = getAnalytics(app);
export const db = getFirestore();

export const addCollectionAndDocuments = async (CollectionKey, docKey, docToAdd, mergeStatus = true) => {
  try{
    await setDoc(doc(db, CollectionKey, docKey), docToAdd, mergeStatus = true);
    alert("Response Recieved");
  } catch(err){
    alert("Something went wrong, please refresh and try again");
    console.log(err);
  }
    
}

export const uploadDocWithImages = (filesToUpload, CollectionKey, docKey, docToAdd, mergeStatus = true) => {

  if (docKey === undefined){
  docKey = objectHash.MD5(docToAdd);
  }

  let imageList = [];
  filesToUpload.forEach(fileToUpload => {
      const reference = ref(Storage, `Application/CV/${docKey + v4()}`)
      uploadBytes(reference, fileToUpload)
      .then(snapshot => {
      return getDownloadURL(snapshot.ref)
      })
      .then(downloadURL => {
      console.log('Download URL', downloadURL);
      imageList.push(downloadURL);

      if(filesToUpload.length == imageList.length){
          docToAdd["images"] = imageList;
          docToAdd["id"] = docKey;
          addCollectionAndDocuments(CollectionKey, docKey, docToAdd, mergeStatus = true);
      }
      })
  }); 
}




  