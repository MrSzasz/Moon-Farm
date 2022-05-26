import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC5OTCkTXfBfu1t9jaCKK0OZsmSCc-9_4w",
  authDomain: "moon-farm-2c1cc.firebaseapp.com",
  projectId: "moon-farm-2c1cc",
  storageBucket: "moon-farm-2c1cc.appspot.com",
  messagingSenderId: "614376430857",
  appId: "1:614376430857:web:c25606c219dd6258aa07d8"
};

const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return app
}