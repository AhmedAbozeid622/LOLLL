// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyDXfpvkdoZ9drBfQ55GsBvaEUaTwGKlhJ0",
authDomain: "clone-bb376.firebaseapp.com",
projectId: "clone-bb376",
storageBucket: "clone-bb376.appspot.com",
messagingSenderId: "780361912851",
appId: "1:780361912851:web:4ede0ca0243674e7c2e5e6",
measurementId: "G-BNJXJTTV3Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;









