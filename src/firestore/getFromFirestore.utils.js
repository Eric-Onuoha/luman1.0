import { initializeApp } from 'firebase/app';

import {
    doc,
    getDoc,
    getDocs,
    getFirestore,
    collection,
    // query,
    // getDocs
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

export const db = getFirestore();

export const getSingleDocument = async (collectionKey, documentKey) => {
    const docRef = doc(db, collectionKey, documentKey);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
        return {};
    } 
    const document = docSnap.data();
    return document;
}

export const getMultipleDocuments = async (collectionKey) => {
    const querySnapshot = await getDocs(collection(db, collectionKey));
    let documents = {}
    querySnapshot.docs.map((doc) => { 
        documents[doc.id] = doc.data()
    });
    return documents;
}

