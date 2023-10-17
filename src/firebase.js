// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAIVvcZLum8BP-3ZwzffEmi2wg03USaXoE",
  authDomain: "ssdc-recruitment-24.firebaseapp.com",
  databaseURL: "https://ssdc-recruitment-24-default-rtdb.firebaseio.com",
  projectId: "ssdc-recruitment-24",
  storageBucket: "ssdc-recruitment-24.appspot.com",
  messagingSenderId: "687271813135",
  appId: "1:687271813135:web:e548286e4f207e22ef037a",
  measurementId: "G-SYW5GPBH8Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);