// src/firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC4PUSmxIiXqD9VAX9xl1dDPjf0NFGaKUk",
    authDomain: "movie-series-review.firebaseapp.com",
    projectId: "movie-series-review",
    storageBucket: "movie-series-review.appspot.com",
    messagingSenderId: "850393240108",
    appId: "1:850393240108:web:021370afca39f07bc0f789",
    measurementId: "G-GGYL2X0VE8"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);

// Export db and auth
export { db, auth };
