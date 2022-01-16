// import firestore from '../firebase.js';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { GoogleLogin } from 'react-google-login';
import {collection, getDocs, doc, query, onSnapshot, getFirestore, setDoc, getDoc } from "firebase/firestore"

const authConfiguration = require("../config/authConfig.json");

const Cheese = ({setUserTokenCount, setUserDisplayName}) => {

    const handleLogin = async () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
    
            // console.log("Token: " + token); 
            // console.log("Credential: " + JSON.stringify(credential));
            // console.log("User: " + user.uid);
            
            console.log(getAuth().currentUser.photoURL); 
            const db = getFirestore(); 
            var pastUser = new Boolean(false);             
            getDocs(collection(db, "Users")).then((querySnapshot) => {
                console.log(querySnapshot); 
                querySnapshot.forEach((doc) => {
                    console.log(doc.id); 
                    console.log(getAuth().currentUser.uid); 
                    if (doc.id == getAuth().currentUser.uid) {
                        pastUser = new Boolean(true); 
                    }
                })
            }).catch((error) => {
                console.log(error)
            });       
            if (!pastUser) {
                setDoc(doc(db, "Users", getAuth().currentUser.uid), {
                    TokenCount: 0
                })
            }
            
            const auth = getAuth()
            if (auth.currentUser) {
                const docRef = doc(db, "Users", auth.currentUser.uid); 
                getDoc(docRef).then((docSnap) => {
                    if (docSnap.exists()) {
                        console.log(docSnap.data().TokenCount.toString())
                        setUserTokenCount(docSnap.data().TokenCount.toString())
                    } else {
                        console.log("User does not exist") 
                    }
                })
                setUserDisplayName(auth.currentUser.displayName)
            }
            
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
    
            console.log("Error: " + error);
            console.log("Email: " + email);
            console.log("Credential: " + credential);
        });
    }

    return (
        <div>
            <GoogleLogin
            clientId={authConfiguration.CLIENT_ID}
            buttonText="Log in with Google"
            onSuccess={handleLogin}
            onFailure={handleLogin}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}/>
            {/* <button onClick={handleLogin}></button> */}
        </div>
    )
}

Cheese.defaultProps = {
    text: "This is default text", 
}

// const auth = firestore.auth(); 
// const provider = new firestore.auth.GoogleAuthProvider(); 

export default Cheese