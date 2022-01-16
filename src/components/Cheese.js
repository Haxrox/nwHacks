// import firestore from '../firebase.js';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { GoogleLogin } from 'react-google-login';


const Cheese = ({text}) => {

    return (
        <div>
            <button onClick={handleLogin}>Login with Google</button>
            <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Log in with Google"
            onSuccess={handleLogin}
            onFailure={handleLogin}
            cookiePolicy={'single_host_origin'}
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
    });
}

export default Cheese