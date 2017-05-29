import firebase from 'firebase';

const config ={
    apiKey: "AIzaSyCFaZSWh7gmT0AjFOPSjBlG9K2rBqqgg0k",
    authDomain: "basic-auth-32bca.firebaseapp.com",
    databaseURL: "https://basic-auth-32bca.firebaseio.com",
    projectId: "basic-auth-32bca",
    storageBucket: "basic-auth-32bca.appspot.com",
    messagingSenderId: "1079218291289"
  }

firebase.initializeApp(config)

export const ref = firebase.database.ref
export const firebaseAuth = firebase.auth
