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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    // Add new user to db
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;

        const createdAt = new Date();

        try {
            userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (err) {
            console.log('Error creating user ', err);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
