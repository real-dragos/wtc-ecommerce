import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA9SVeQYDsyXBui9-hA-0DGRjyDpE-WKgQ",
    authDomain: "crown-db-b4927.firebaseapp.com",
    databaseURL: "https://crown-db-b4927.firebaseio.com",
    projectId: "crown-db-b4927",
    storageBucket: "crown-db-b4927.appspot.com",
    messagingSenderId: "621976850729",
    appId: "1:621976850729:web:e45ed020f7bf0187b76738",
    measurementId: "G-8T01CJG2J4"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const userSnapShot = await userRef.get();

    if(!userSnapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }
      catch(error) {
        console.log("error creating user", error.message);
      }
    }

    return userRef;
  }

  export default firebase;