import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBAOm8P10j9hla2rWgKtIF7J0nfDD1g8p0",
    authDomain: "disneyplus-clone-8b660.firebaseapp.com",
    projectId: "disneyplus-clone-8b660",
    storageBucket: "disneyplus-clone-8b660.appspot.com",
    messagingSenderId: "343571665172",
    appId: "1:343571665172:web:a8883a521fd4736b13b201",
    measurementId: "G-X7ZQNW0T6C"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();
// export {auth, provider, storage};
// export default db;