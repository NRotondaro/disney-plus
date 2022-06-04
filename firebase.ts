import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyDiWymiUBSaC2IeSBd4RmdEsCad-kJc2MI',
  authDomain: 'disney-plus-53eb5.firebaseapp.com',
  projectId: 'disney-plus-53eb5',
  storageBucket: 'disney-plus-53eb5.appspot.com',
  messagingSenderId: '771679620998',
  appId: '1:771679620998:web:046894a7a6307eba8ae607',
}

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()
const db = firebase.firestore()

export { app, db }
