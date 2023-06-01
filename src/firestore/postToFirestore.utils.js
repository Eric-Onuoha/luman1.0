import { initializeApp } from "firebase/app";

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

const analytics = getAnalytics(app);
export const db = getFirestore();

export const addCollectionAndDocuments = async (CollectionKey, docKey, docToAdd, mergeStatus) => {
  console.log("here");
    await setDoc(doc(db, CollectionKey, docKey), docToAdd, mergeStatus);
    alert("Application Submitted!");
}

// export const uploadDocWithImages = (filesToUpload, CollectionKey, docKey, docToAdd, mergeStatus) => {

//   if (docKey === undefined){
//   docKey = objectHash.MD5(docToAdd);
//   }

//   let imageList = [];
//   filesToUpload.forEach(fileToUpload => {
//       const reference = ref(Storage, `wipf/images/${CollectionKey}/${docKey}/${fileToUpload.name + v4()}`)
//       uploadBytes(reference, fileToUpload)
//       .then(snapshot => {
//       return getDownloadURL(snapshot.ref)
//       })
//       .then(downloadURL => {
//       console.log('Download URL', downloadURL);
//       imageList.push(downloadURL);

//       if(filesToUpload.length == imageList.length){
//           docToAdd["images"] = imageList;
//           docToAdd["id"] = docKey;
//           addCollectionAndDocuments(CollectionKey, docKey, docToAdd, mergeStatus);
//       }
//       })
//   }); 
// }




  