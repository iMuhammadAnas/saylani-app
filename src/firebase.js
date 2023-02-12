import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyDhDJbqVF5X5gub4rbZrs1yrPHzWL4xug0",
    authDomain: "saylani-application.firebaseapp.com",
    projectId: "saylani-application",
    storageBucket: "saylani-application.appspot.com",
    messagingSenderId: "408439774288",
    appId: "1:408439774288:web:db47625b82d13ff59d4555"
};

export const app = initializeApp(firebaseConfig);