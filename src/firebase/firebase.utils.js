import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBBqftWyrBUY-XxF7-UCgE17dD5m-2LM40",
  authDomain: "e-commerce-db-c4be7.firebaseapp.com",
  databaseURL: "https://e-commerce-db-c4be7.firebaseio.com",
  projectId: "e-commerce-db-c4be7",
  storageBucket: "e-commerce-db-c4be7.appspot.com",
  messagingSenderId: "949314315722",
  appId: "1:949314315722:web:38f37af42f50f819485b33",
  measurementId: "G-1BX7YPHNES"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;