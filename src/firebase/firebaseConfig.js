import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZVlQG-lG_4yc1cyHLsogS3N9gudPT1QY",
  authDomain: "academic-performance-hub.firebaseapp.com",
  projectId: "academic-performance-hub",
  storageBucket: "academic-performance-hub.firebasestorage.app",
  messagingSenderId: "675724275175",
  appId: "1:675724275175:web:b9a3b8f4d4f5b458d7e142",
  measurementId: "G-97E36F21B3",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;