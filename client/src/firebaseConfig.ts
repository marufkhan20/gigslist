// src/firebase-config.js
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBBQ10xgdKe04kPyrOcPn8USgcE-wPmvpY",
  authDomain: "gigslist-37614.firebaseapp.com",
  projectId: "gigslist-37614",
  storageBucket: "gigslist-37614.appspot.com",
  messagingSenderId: "877737136500",
  appId: "1:877737136500:web:93cc0062b5b0b2dea31c21",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };

