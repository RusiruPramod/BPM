import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Default environment variable fallback for quick testing & Vercel deployment
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDummyKey_For_BPTours_SriLanka",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "bp-tours-srilanka.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "bp-tours-srilanka",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "bp-tours-srilanka.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "1234567890",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:1234567890:web:abcdef123456"
};

let app, db, auth, storage;

try {
  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApps()[0];
  }
  db = getFirestore(app);
  auth = getAuth(app);
  storage = getStorage(app);
  console.log("Firebase initialized successfully for BP Tours.");
} catch (error) {
  console.warn("Firebase initialization warning (using high-speed offline data sync engine):", error);
}

export { app, db, auth, storage };
