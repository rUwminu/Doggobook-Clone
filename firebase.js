import firebase from 'firebase'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBRYiNUh8kUwfwOfFXovG5KfG7v6j2vwxE',
  authDomain: 'doggobook-43795.firebaseapp.com',
  projectId: 'doggobook-43795',
  storageBucket: 'doggobook-43795.appspot.com',
  messagingSenderId: '953567400104',
  appId: '1:953567400104:web:f08901e0e364f7195ff29d',
}

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

const db = app.firestore()
const storage = firebase.storage()

export { db, storage }
