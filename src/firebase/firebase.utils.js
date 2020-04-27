import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAEzlaxelULPonSWrAUYGppaj67DaIjSw8",
    authDomain: "crwn-db-6a8d3.firebaseapp.com",
    databaseURL: "https://crwn-db-6a8d3.firebaseio.com",
    projectId: "crwn-db-6a8d3",
    storageBucket: "crwn-db-6a8d3.appspot.com",
    messagingSenderId: "674592572331",
    appId: "1:674592572331:web:08c3b5e5e48bf4a43388ee",
    measurementId: "G-T3NC787DRY"
  };

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase

