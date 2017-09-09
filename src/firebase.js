import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCNI4Tamopx_bou2_soin0RGLtU8x5drDw",
  authDomain: "goalcoach-c0994.firebaseapp.com",
  databaseURL: "https://goalcoach-c0994.firebaseio.com",
  projectId: "goalcoach-c0994",
  storageBucket: "",
  messagingSenderId: "114869522279"
};

export const firebaseApp = firebase.initializeApp(config);
