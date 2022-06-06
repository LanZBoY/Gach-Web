import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAdTrlKUDL7YRGKmubX7hLrPtNOeqHowfo",
  authDomain: "gage-web.firebaseapp.com",
  projectId: "gage-web",
  storageBucket: "gage-web.appspot.com",
  messagingSenderId: "535587474467",
  appId: "1:535587474467:web:a0709d7388e9f5edea3596",
  measurementId: "G-ER6N84GQDB",
};
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
const firestore = getFirestore(firebaseApp);
export { storage, firestore };
