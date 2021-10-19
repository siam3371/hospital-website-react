import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.init"; 
const initializeAuthentication = () => {
     return initializeApp(firebaseConfig);
} 
export default initializeAuthentication;