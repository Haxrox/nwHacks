// Import the Firebase function SDKs
import { initializeApp } from "firebase/app";

const firebaseConfig = require("./config/firebaseConfig.json");

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;