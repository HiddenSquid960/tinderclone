import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBE6Ro1Vec04dRuh4hSBrMXrmg6cYpT1VQ",
    authDomain: "tinder-clone-9b24a.firebaseapp.com",
    databaseURL: "https://tinder-clone-9b24a.firebaseio.com",
    projectId: "tinder-clone-9b24a",
    storageBucket: "tinder-clone-9b24a.appspot.com",
    messagingSenderId: "563239015056",
    appId: "1:563239015056:web:3757cfea403e62569afe15",
    measurementId: "G-88Y5RD2JXB",
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;
