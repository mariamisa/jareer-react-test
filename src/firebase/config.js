import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/firebase-auth';


const firebaseConfig = {
    apiKey: "AIzaSyBPSD-4eCzllHbCNYK-JJ4eRFo2Yna9AEk",
    authDomain: "auth-project-a1208.firebaseapp.com",
    projectId: "auth-project-a1208",
    storageBucket: "auth-project-a1208.appspot.com",
    messagingSenderId: "946761706616",
    appId: "1:946761706616:web:7bdf15d1cbe4c67271518d",
    measurementId: "G-TG4VZETSDK"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = firebase.auth();

export default firebase;
