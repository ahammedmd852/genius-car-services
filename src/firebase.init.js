// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB0vkWCOOHFQ7itLdphdnAfEowLZk2y7Vw",
    authDomain: "genius-car-services-57fb1.firebaseapp.com",
    projectId: "genius-car-services-57fb1",
    storageBucket: "genius-car-services-57fb1.appspot.com",
    messagingSenderId: "846745668578",
    appId: "1:846745668578:web:acec53ca781f2476ed87bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;