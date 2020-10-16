import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAsarnpumTHZv9IZjujJSPvVC6GdaytLhs",
    authDomain: "artfetch-320d1.firebaseapp.com",
    databaseURL: "https://artfetch-320d1.firebaseio.com",
    projectId: "artfetch-320d1",
    storageBucket: "artfetch-320d1.appspot.com",
    messagingSenderId: "421402105492",
    appId: "1:421402105492:web:4735f1a0a1ed1d4e6b8681",
    measurementId: "G-KXD8NMZ8QX"
};

firebase.initializeApp(firebaseConfig)
const storage = firebase.storage()

export { storage, firebase as default}