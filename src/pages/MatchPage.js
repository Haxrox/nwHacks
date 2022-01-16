import React from 'react'
import  Button  from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { deleteField, getFirestore, doc, updateDoc, increment } from 'firebase/firestore';
import {Firestore, Listen, Unsubscribe, UpdateDocument} from '../firebase.js';

const MatchPage = () => {

    const history = useHistory();
    // console.log(history.data.location)

    const auth = getAuth();
    const seatedUserId = auth.currentUser.uid
    const requesterDocument = doc(Firestore, history.location.location, "Requesters");
    Listen(requesterDocument, "requestersUpdated", (data => {
        const requestInfo = data[auth.currentUser.uid];
        if (requestInfo && requestInfo.state != null) {
            Unsubscribe(requesterDocument, "requestersUpdated");

            if (requestInfo.state) {
                UpdateDocument("Users", requestInfo.responder, {
                    tokenCount: increment(1)
                });   
            }
            
            UpdateDocument("Users", seatedUserId, {
                tokenCount: increment(-1)
            });

            updateDoc(requesterDocument, requesterDocument, {
                [seatedUserId]: deleteField()
            })
        }
    }))

    const handleLeave = () => {
        //handle backend, ie delete match and notify requestor
        //also implement -1 token
        updateDoc(Firestore, requesterDocument, {
            [seatedUserId]: deleteField()
        })
        UpdateDocument("Users", seatedUserId, {
            tokenCount: increment(-1)
        });
        history.push("/home")        
    };
    return (
        <div>
            <div style={{marginTop: 200}}>
            <h1>Match Found!</h1>
            <h2 style={{marginTop: 50}}>Please wait to transfer seat</h2>
            <h3>or</h3>
            </div>
            <Button style={{marginTop: 0}}
                onClick = {handleLeave}
                variant="outline-danger">
                Leave Now (-1 token)
            </Button>
            <h3 style={{marginTop: 300}}>**Token will be transferred when seat transfer is confirmed**</h3>
        </div>
    )
}

export default MatchPage
