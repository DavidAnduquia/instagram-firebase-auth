// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword , signInWithEmailLink ,sendSignInLinkToEmail ,sendEmailVerification , fetchSignInMethodsForEmail  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUDvN9BVs4sVWEnXeJlN1Vew88gV-AG0w",
  authDomain: "login-firebase-auth-1590b.firebaseapp.com",
  projectId: "login-firebase-auth-1590b",
  storageBucket: "login-firebase-auth-1590b.appspot.com",
  messagingSenderId: "466417286873",
  appId: "1:466417286873:web:559225ec9550081e8fc8c8",
  measurementId: "G-36V66SLDGD"
};


const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'http://localhost:3000/',
    // This must be true.
    handleCodeInApp: true,
    iOS: {
      bundleId: 'com.example.ios'
    },
    android: {
      packageName: 'com.example.android',
      installApp: true,
      minimumVersion: '12'
    },
    dynamicLinkDomain: 'login-firebase-auth-1590b.web.app'
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const getAuthFirebase= getAuth(app);

export const singUp = async (email,password) => {
    const user = await createUserWithEmailAndPassword(getAuthFirebase,email,password);
    return user;
}

export const login = async (email,password) => {
    const user = await  signInWithEmailAndPassword(getAuthFirebase,email,password);
    return user;
}

// Para enviar un correo de verificacion
export const crearUsuarioConCorreoDeConfirmacion = async (email) => {
    const user = await signInWithEmailLink(email,actionCodeSettings);
    return user;
}

// Para obtener info del registro o del login
export const getUserInfo = () => getAuthFirebase;