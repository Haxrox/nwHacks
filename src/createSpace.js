const firebaseAdmin = require("firebase-admin");
const firebaseFirestore = require("firebase-admin/firestore");
const serviceAccount = require("./nwhacks-sitdown-firebase-adminsdk-p1bya-31ed4c6787.json");

firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount)
});

const firestore = firebaseFirestore.getFirestore();
const spaceConfiguration = require("./spaceConfiguration.json");

const collectionReference = firestore.collection(spaceConfiguration.Name);


// Extracting this data from a map would be pretty op
spaceConfiguration.Configuration.Location = new firebaseFirestore.GeoPoint(spaceConfiguration.Configuration.Location.Latitude, spaceConfiguration.Configuration.Location.Longitude);

(async() => {
    collectionReference.doc("Configuration").set(spaceConfiguration.Configuration).then(() => {
        console.log("Configuration set successfully");
    }).catch(console.error);
})();



