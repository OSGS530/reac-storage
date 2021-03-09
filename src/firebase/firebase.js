import firebase from 'firebase/app'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyAAnh6zViYxOmRN_UBl2VNeOzFUDaXmvSU",
    authDomain: "proyecto-database-3aace.firebaseapp.com",
    projectId: "proyecto-database-3aace",
    storageBucket: "proyecto-database-3aace.appspot.com",
    messagingSenderId: "643602593535",
    appId: "1:643602593535:web:9bc3f28fa38b9f72a97eca",
    measurementId: "G-S4GNZZ86JE"
};
// Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage()

  export  {
    storage, firebase as default
  }