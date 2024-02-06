import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAV2HZJoi0AaqwJoome-T856JOBZTcT2O4",
  authDomain: "webcarros-d11f9.firebaseapp.com",
  projectId: "webcarros-d11f9",
  storageBucket: "webcarros-d11f9.appspot.com",
  messagingSenderId: "210780327371",
  appId: "1:210780327371:web:1cd5fd090809a39239ba4e"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)

export {db, auth, storage};