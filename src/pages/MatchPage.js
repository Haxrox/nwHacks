import React from 'react'
import  Button  from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom';
const MatchPage = () => {

    const history = useHistory();

    const handleLeave = () => {
        //handle backend, ie delete match and notify requestor
        //also implement -1 token
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
