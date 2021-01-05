import firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyDS5p1FIhFPP9zoEkKiANqhzhFdZfAwsQY",
    authDomain: "storyhub-f50a4.firebaseapp.com",
    projectId: "storyhub-f50a4",
    storageBucket: "storyhub-f50a4.appspot.com",
    messagingSenderId: "782148503921",
    appId: "1:782148503921:web:287ba765f99a34175e0ed0",
    measurementId: "G-14V5CZSHS7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase