// import firebase from "firebase";

// const firebaseConfig = {
//     apiKey: "your api key",
//     authDomain: "your credentials",
//     projectId: "your credentials",
//     storageBucket: "your credentials",
//     messagingSenderId: "your credentials",
//     appId: "your credentials",
// };
// firebase.initializeApp(firebaseConfig);
// var database = firebase.database();

// export default database;

// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAI8s_b5vyjHUHLUd7RWP6VqB53TZAt0zM",
    authDomain: "orbiz-f7ec8.firebaseapp.com",
    projectId: "orbiz-f7ec8",
    storageBucket: "orbiz-f7ec8.appspot.com",
    messagingSenderId: "104420660148",
    appId: "1:104420660148:web:696d59fc2b018c1ac018e1",
    measurementId: "G-VV9L1TMVP9",
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);

// import firebase from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyAI8s_b5vyjHUHLUd7RWP6VqB53TZAt0zM",
//     authDomain: "orbiz-f7ec8.firebaseapp.com",
//     projectId: "orbiz-f7ec8",
//     storageBucket: "orbiz-f7ec8.appspot.com",
//     messagingSenderId: "104420660148",
//     appId: "1:104420660148:web:696d59fc2b018c1ac018e1",
//     measurementId: "G-VV9L1TMVP9",
// };

// // Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);

// export default app;
