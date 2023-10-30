import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyADc0__9_wOJzJWR8QJJqT3zZ_tbM2bk90",
  authDomain: "boardgames-98e9a.firebaseapp.com",
  projectId: "boardgames-98e9a",
  storageBucket: "boardgames-98e9a.appspot.com",
  messagingSenderId: "290325236593",
  appId: "1:290325236593:web:831bdfe43f07dc167dc4d0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

