import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyChAGW9l3n2TrFThOqUZoAjy9RGa-keE20",
  authDomain: "equisde24-b891f.firebaseapp.com",
  projectId: "equisde24-b891f",
  storageBucket: "equisde24-b891f.firebasestorage.app",
  messagingSenderId: "850614831318",
  appId: "1:850614831318:web:433d318bb00ec2369ea177",
  measurementId: "G-XVBCYC07VW"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);