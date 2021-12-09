import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
const initialAuthentication = () => {
    return initializeApp(firebaseConfig);
}

export default initialAuthentication;