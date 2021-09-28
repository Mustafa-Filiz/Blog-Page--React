import firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyC-u7llMQekqbAFlecROsHH9ZpoyQohDqQ",
    authDomain: "my-blog-page--react.firebaseapp.com",
    projectId: "my-blog-page--react",
    storageBucket: "my-blog-page--react.appspot.com",
    messagingSenderId: "196859487398",
    appId: "1:196859487398:web:43c77b600947bfb76d4067"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase