import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyB-JGBcL67jguHy32_d4iSQ5Tfc0TxmgEU",
  authDomain: "qwitter-dadfa.firebaseapp.com",
  projectId: "qwitter-dadfa",
  storageBucket: "qwitter-dadfa.appspot.com",
  messagingSenderId: "867484091182",
  appId: "1:867484091182:web:b6b1a394276bbe48aef0bf",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();
