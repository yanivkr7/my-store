import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyCH6Zffn1BjLjxb632ED72_rppjdGq05sc',
    authDomain: 'store-db-b9c82.firebaseapp.com',
    databaseURL: 'https://store-db-b9c82.firebaseio.com',
    projectId: 'store-db-b9c82',
    storageBucket: 'store-db-b9c82.appspot.com',
    messagingSenderId: '404318999753',
    appId: '1:404318999753:web:890e76110cf72f1f056918'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
