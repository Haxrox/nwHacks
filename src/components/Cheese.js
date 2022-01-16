// import firestore from '../firebase.js';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { GoogleLogin } from 'react-google-login';
const authConfiguration = require("../config/authConfig.json");


const Cheese = ({text}) => {
    return (
        <div>
            <GoogleLogin
            clientId={authConfiguration.CLIENT_ID}
            buttonText="Log in with Google"
            onSuccess={handleLogin}
            onFailure={handleLogin}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
/>
        </div>
    )
}

Cheese.defaultProps = {
    text: "This is default text", 
}

// const auth = firestore.auth(); 
// const provider = new firestore.auth.GoogleAuthProvider(); 

const handleLogin = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;

        console.log("Token: " + token); 
        console.log("Credential: " + JSON.stringify(credential));
        console.log("User: " + user.uid);

        localStorage.setItem('Author', user.uid);
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

        console.log("ErrorCode: " + errorCode);
        console.log("ErrorMessage: " + errorMessage);
        console.log("Email: " + email);
        console.log("Credential: " + credential);
    });
}

export default Cheese