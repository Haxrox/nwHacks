import React from 'react'
import { Spinner } from 'react-bootstrap'
import Header from '../components/Header'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const WaitPage = () => {

    const history = useHistory();
    const handleCancel = () => {
        //add backend to delete/cancel current response from database
        history.push("/respond")};

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
