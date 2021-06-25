import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


  var firebaseConfig = {
    apiKey: "AIzaSyCImDc-iMKLIUgbYFkrAwYBMmEOi-s-ZwE",
    authDomain: "iip-projekt.firebaseapp.com",
    projectId: "iip-projekt",
    storageBucket: "iip-projekt.appspot.com",
    messagingSenderId: "153353690805",
    appId: "1:153353690805:web:4e1ca4229d832915b528fc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let db = firebase.firestore();

  export {
    firebase, db
}