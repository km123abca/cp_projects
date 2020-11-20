import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBOzCgrQkxT_7ZLBohGJtcBxFOrGCYGgKA",
  authDomain: "facebook-kitchu.firebaseapp.com",
  databaseURL: "https://facebook-kitchu.firebaseio.com",
  projectId: "facebook-kitchu",
  storageBucket: "facebook-kitchu.appspot.com",
  messagingSenderId: "87927132671",
  appId: "1:87927132671:web:b4825106405d746d6317ca",
  measurementId: "G-GVNGZEQ9X9",
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export default db;
export { auth, provider };
