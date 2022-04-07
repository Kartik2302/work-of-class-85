import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAgfNWoQY-so4VZ4Wl4zG0AVFIcRpQOTaU",
  authDomain: "e-library-c7455.firebaseapp.com",
  projectId: "e-library-c7455",
  storageBucket: "e-library-c7455.appspot.com",
  messagingSenderId: "654490844134",
  appId: "1:654490844134:web:9268f923d1a0b4571d3427"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
