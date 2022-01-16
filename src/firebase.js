// Import the Firebase function SDKs
import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore, onSnapshot, collection, getDocs, updateDoc } from "firebase/firestore";

const firebaseConfig = require("./config/firebaseConfig.json");

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const Firestore = getFirestore();

var listeners = {};

function initListener(document) {
    listeners[document.path].Active = true;
    listeners[document.path].Subscription = onSnapshot(document, { includeMetadataChanges: false }, (snapshot => {
        console.log(`${snapshot.ref.path} Changed`);
        Object.values(listeners[snapshot.ref.path].Callback).forEach((callback) => {
            callback(snapshot.data());
        });
    }));
}

function GetDocument(collection, document) {
    return getDoc(doc(Firestore, collection, document)).then(snapshot => {
        console.log(`Got ${collection}/${document} Data`);
        if (snapshot.exists()) {
            return snapshot.data();
        } else {
            console.log("Document doesn't exist");
        }
    })
}

function UpdateDocument(collection, document, data) {
    return updateDoc(doc(Firestore, collection, document), data).then(() => {
        console.log(`Wrote to document: ${collection}/${document}`);
    });
}

function Listen(document, callbackID, callback) {
    console.log("Listen - " + document.path);
    const listenersCache = listeners[document.path] || {
        Active: false,
        Subscription: null,
        Callback: {}
    };
    listenersCache.Callback[callbackID] = callback;
    listeners[document.path] = listenersCache;
    if (!listenersCache.Active) {
        initListener(document);
    }
}

function Unsubscribe(document, callbackID) {
    if (document) {
        const listenersCache = listeners[document.path];
        if (listenersCache != null) {
            delete listenersCache.Callback[callbackID];
            if (listenersCache.Callback == {}) {
                listenersCache.Active = false;
            }
        }
    }
}

(async() => {
    const snapshot = await getDocs(collection(Firestore, "Spaces"));
    snapshot.forEach(document => {
        listeners[document.ref.path] = listeners[document.ref.path] || {
            Active: false,
            Subscription: null,
            Callback: {}
        };

        const requestDocument = doc(Firestore, document.id, "Requesters");
        listeners[requestDocument.path] = listeners[requestDocument.path] || {
            Active: false,
            Subscription: null,
            Callback: {}
        }

        const respondDocument = doc(Firestore, document.id, "Responders");
        listeners[respondDocument.path] = listeners[respondDocument.path] || {
            Active: false,
            Subscription: null,
            Callback: {}
        }
    });
})();

export {
    Firestore, GetDocument, UpdateDocument, Listen, Unsubscribe
};