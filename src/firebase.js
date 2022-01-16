// Import the Firebase function SDKs
import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore, onSnapshot, collection, getDocs, updateDoc } from "firebase/firestore";

const firebaseConfig = require("./config/firebaseConfig.json");

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const firestore = getFirestore();

const listeners = {};

function initListener(document) {
    listeners[document].Active = true;
    listeners[document].Subscription = onSnapshot(document, (document => {
        listeners[document.id].Callback.values().forEach((callback) => {
            callback(document);
        });
    }));
}

function GetDocument(collection, document) {
    return getDoc(doc(firestore, collection, document)).then(snapshot => {
        console.log(`Got ${collection}/${document} Data`);
        if (snapshot.exists()) {
            return snapshot.data();
        } else {
            console.log("Document doesn't exist");
        }
    })
}

function UpdateDocument(collection, document, data) {
    return updateDoc(doc(firestore, collection, document), data).then(() => {
        console.log(`Wrote to document: ${collection}/${document}`);
    });
}

function Listen(document, callbackID, callback) {
    const listenersCache = listeners[document] || {
        Active: false,
        Subscription: null,
        Callback: {}
    };
    listenersCache.Callback[callbackID] = callback;
    listeners[document] = listenersCache;
    if (!listenersCache.Active) {
        initListener();
    }
}

function Unsubscribe(document, callbackID) {
    const listenersCache = listeners[document];
    if (listenersCache != null) {
        delete listenersCache.Callback[callbackID];
    }
}

(async() => {
    const snapshot = await getDocs(collection(firestore, "Spaces"));
    snapshot.forEach(document => {
        listeners[document] = {
            Active: false,
            Subscription: null,
            Callback: {}
        };

        const requestDocument = doc(firestore, document.id, "Requesters");
        listeners[requestDocument] = {
            Active: false,
            Subscription: null,
            Callback: {}
        }

        const respondDocument = doc(firestore, document.id, "Responders");
        listeners[respondDocument] = {
            Active: false,
            Subscription: null,
            Callback: {}
        }
    });
})();

export {
    GetDocument, UpdateDocument, Listen, Unsubscribe
};