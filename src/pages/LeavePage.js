import Header from '../components/Header'
import Form from "react-bootstrap/Form"
import Button from 'react-bootstrap/Button'
import React, { useState } from "react"

const LeavePage = () => {

    const [location, setLocation] = useState(); 
    const [leaveIn, setLeaveIn] = useState();  
    //assuming we are using localStorage to store user's location

    const onSubmit = () => {
        console.log(leaveIn);
      };
    
    return (
        <div>
            <Header />
            <h2>Current Location: {location}</h2>
            <br></br>
            <Form.Group className="m-0">
                <Form.Control
                className="textFeedback"
                as="textarea"
                rows="3"
                placeholder="feedback"
                value={leaveIn}
                type="text"
                onChange={e => {
                    setLeaveIn(e.target.value);
                  }}/>

                <Button
                className="btnFormSend"
                variant="outline-success"
                onClick={onSubmit}
                >
                Send Feedback
                </Button>
            </Form.Group>
        </div>
        

    )
}

export default LeavePage