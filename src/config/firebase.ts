import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"
import { initializeApp } from "firebase/app"
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};
const app = initializeApp(firebaseConfig)
const storage = getStorage(app)
const db = getFirestore(app);
const auth = getAuth(app)

export {
    auth,
    db,
    storage
}
