import Firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// import { seedDatabase } from '../seed';

var firebaseConfig = {
    apiKey: "AIzaSyCkmg-bZaufo1kGc2hKclIt0KJLuhjcB1s",
    authDomain: "instagram-clone-complex-49bd5.firebaseapp.com",
    databaseURL: "https://instagram-clone-complex-49bd5-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-complex-49bd5",
    storageBucket: "instagram-clone-complex-49bd5.appspot.com",
    messagingSenderId: "814932710089",
    appId: "1:814932710089:web:e5dff09ef77577844b3318",
    measurementId: "G-H1Z3CGGG9R"
  };

  // Initialize Firebase
  const firebase = Firebase.initializeApp(firebaseConfig);
  const { fieldValue } = Firebase.firestore;

  //Data Dummy / Data Testing
//   seedDatabase(firebase)

  export { firebase, fieldValue }