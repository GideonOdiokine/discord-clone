import firebase from "firebase";
// import auth

const firebaseConfig = {
  apiKey: "AIzaSyBAQu370hoK8FdxCKaKV6YMalYaTLLV3Ws",
  authDomain: "discord-clone-7b4e7.firebaseapp.com",
  projectId: "discord-clone-7b4e7",
  storageBucket: "discord-clone-7b4e7.appspot.com",
  messagingSenderId: "747645273158",
  appId: "1:747645273158:web:5544e93ba48a54759df647",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;
