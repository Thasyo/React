import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCJ77G3Fl6rsjc57JnE-zFFen1pHJgwKZE",
  authDomain: "miniblog-37c9f.firebaseapp.com",
  projectId: "miniblog-37c9f",
  storageBucket: "miniblog-37c9f.appspot.com",
  messagingSenderId: "1041214788322",
  appId: "1:1041214788322:web:ad4726aae470eb8fd704bb"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };