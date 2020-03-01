import * as firebase from 'firebase'

export const connectToDB = () => {

    const firebaseConfig = {
        apiKey: "AIzaSyCOtdwnXO20DFVJ6VB3OvAQyQFJcchC744",
        authDomain: "bitnami-qdu86mnwzq.firebaseapp.com",
        databaseURL: "https://bitnami-qdu86mnwzq.firebaseio.com",
        projectId: "bitnami-qdu86mnwzq",
        storageBucket: "bitnami-qdu86mnwzq.appspot.com",
        messagingSenderId: "568251604138",
        appId: "1:568251604138:web:7dc9b8488aa448a3ed04d3",
        measurementId: "G-2K1XVQV2CH",
        /* Visit https://firebase.google.com/docs/database/security to learn more about security rules. */
        rules: {
        ".read": true,
            ".write": false
        }
    };
// Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    return firebase.database()
};