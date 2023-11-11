import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDEm3HyYKiVQL-jN-bb4vANVdXtY2DHAe0",
  authDomain: "moderate-roullet-for-react.firebaseapp.com",
  projectId: "moderate-roullet-for-react",
  storageBucket: "moderate-roullet-for-react.appspot.com",
  messagingSenderId: "361157483164",
  appId: "1:361157483164:web:b9cb77c1addbe19ab92b59",
  measurementId: "G-B9MT9DZNEG",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
