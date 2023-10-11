import {initializeApp} from 'firebase/app'

import {getAuth} from 'firebase/auth'




const firebaseConfig = {
  apiKey: "AIzaSyDsljfNtreyCDE3B96lvVZwE-8JNmaStSk",
  authDomain: "password-auth-b416a.firebaseapp.com",
  projectId: "password-auth-b416a",
  storageBucket: "password-auth-b416a.appspot.com",
  messagingSenderId: "994200038172",
  appId: "1:994200038172:web:034458e21eb7eca434a8d9",
  measurementId: "G-ZYS9QECVE2"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)