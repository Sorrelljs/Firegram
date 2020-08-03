import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBLDGZNExWxuIEcbbpVTA8rixcVujmTWB0",
  authDomain: "sjs-firegram.firebaseapp.com",
  databaseURL: "https://sjs-firegram.firebaseio.com",
  projectId: "sjs-firegram",
  storageBucket: "sjs-firegram.appspot.com",
  messagingSenderId: "753804789877",
  appId: "1:753804789877:web:99c9725af270f1ae27503c",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
