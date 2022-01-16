// Import the Firebase function SDKs
import { initializeApp } from "firebase/app";

const firebaseConfig = require("./config/firebaseConfig.json");

// Initialize Firebase
const firestore = initializeApp(firebaseConfig);

console.log("Initialized firebase");
export default firestore;