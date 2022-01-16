import React from 'react'
import { Spinner } from 'react-bootstrap'
import Header from '../components/Header'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import {Firestore, Listen, Unsubscribe, UpdateDocument} from '../firebase.js';
import {getAuth} from 'firebase/auth'
import { doc, deleteField } from 'firebase/firestore'

const WaitPage = () => {

    const history = useHistory();
    const location = history.location.data;

    const auth = getAuth();
    Listen(doc(Firestore, location, "Requesters"), "requestersUpdated", (data => {
        const requestInfo = data[auth.currentUser.uid];
        if (requestInfo && requestInfo.requester) {
            history.push({
                pathname: "/match",
                data: requestInfo.requester
            })
        }
    }))

    const handleCancel = () => {
        //add backend to delete/cancel current response from database
        UpdateDocument(location, "Requesters", {
            [auth.currentUser.uid]: deleteField()
        })
        history.push("/home")};    

    return (
        <div>
            
            <div style={{marginTop: 200}}>
            <b>Looking for seat requests</b>
            </div>
            <div class="d-flex justify-content-center align-items-center" style={{marginTop: 40}}>
            
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
            </div>
            {/*Cancel button Should update database so that respond is no longer there*/}
            <Button style={{marginTop: 150}}
                className="btnFormSend"
                variant="outline-danger"
                onClick={handleCancel}>
                
                Cancel
            </Button>
        </div>
    )
    
}

export default WaitPage
