import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCpg_hARbgr8577V4if8_3t8roniLFXX0A",
  authDomain: "webapp-7b74a.firebaseapp.com",
  projectId: "webapp-7b74a",
  storageBucket: "webapp-7b74a.firebasestorage.app",
  messagingSenderId: "232643684110",
  appId: "1:232643684110:web:86541c94a00e57f649d95f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
