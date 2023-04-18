import initializeApp from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAnuxBOb44vPqwZKrBessuyDe1jVY_ycRY",
  authDomain: "parangbird-fed08.firebaseapp.com",
  projectId: "parangbird-fed08",
  storageBucket: "parangbird-fed08.appspot.com",
  messagingSenderId: "164033180758",
  appId: "1:164033180758:web:838950e945a7f309f377f7",
};

export const firebase = initializeApp(firebaseConfig);
