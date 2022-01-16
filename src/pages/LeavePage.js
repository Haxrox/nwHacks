import Header from '../components/Header'
import Form from "react-bootstrap/Form"
import Button from 'react-bootstrap/Button'
import React, { useState } from "react"
import { useHistory } from "react-router-dom";
import { UpdateDocument } from "../firebase.js";
import {arrayUnion} from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const LeavePage = () => {

    const [location, setLocation] = useState(); 
    const [leaveIn, setLeaveIn] = useState(); 
    const [tolerance, setTolerance] = useState();   
    const [address, setAddress] = useState();  
    //assuming we are using localStorage to store user's location
    
    const history = useHistory();

    console.log(history.location.data);

    const onSubmit = async () => {
      const auth = getAuth();
      UpdateDocument(history.location.data, "Requesters", {
        [auth.currentUser.uid]: {
          responderMessage: address,
          leaveTime: Date.now() + leaveIn * 60 * 1000,
          waitTime: tolerance * 60 * 1000,
          tokenCost: 1,
          userData: {
            uid: auth.currentUser.uid,
            displayName: auth.currentUser.displayName,
            avatar: auth.currentUser.photoURL
          },
          responder: null
        }
      }).catch(console.error);
      history.push({
        pathname: "/wait",
        data: history.location.data
      });
    };

    const onUpdate = async () => {
      const auth = getAuth();
      UpdateDocument(history.location.data, "Requesters", {
        [auth.currentUser.uid]: {
          responderMessage: address,
          leaveTime: Date.now() + leaveIn * 60 * 1000,
          waitTime: tolerance * 60 * 1000,
          tokenCost: 1
        }
      }).catch(console.error);
    };
    
    return (
        <div>
            <Header />
            <h2>Current Location: {location}</h2>

            <Form.Group className="m-0">
            <div style={{textAlign: 'left', marginLeft: "20px", fontWeight: "bold"}}>
                Leaving In...
                </div>
                <Form.Control
                className="textFeedback"
                as="textarea"
                rows="1"
                placeholder="Leaving In..."
                value={leaveIn}
                type="number"
                onChange={e => {
                    setLeaveIn(e.target.value);
                  }}/>

                  <div style={{textAlign: 'left', marginLeft: "20px", fontWeight: "bold"}}>
                I can wait another...
                </div>
                  <Form.Control
                className="textFeedback"
                as="textarea"
                rows="1"
                placeholder="Additional wait..."
                value={tolerance}
                type="number"
                onChange={e => {
                    setTolerance(e.target.value);
                  }}/>      
                <div style={{textAlign: 'left', marginLeft: "20px", fontWeight: "bold"}}>
                I'm sitting at...
                </div>
                  <Form.Control
                className="textFeedback"
                as="textarea"
                rows="1"
                placeholder="Where am I sitting"
                value={address}
                type="number"
                onChange={e => {
                    setAddress(e.target.value);
                  }}/>       
                
            </Form.Group>
            <div style={{textAlign: 'left', marginLeft: "50px"}, border}>
            <h3>You will leave in: {leaveIn} minutes</h3>
            <h3>Wait an additional: {tolerance} minutes</h3>
            </div>
            <br></br>
            <Button
                className="btnFormSend"
                variant="outline-danger"
                onClick={onUpdate}
                >
                Update
            </Button>
            <Button
                className="btnFormSend"
                variant="outline-danger"
                onClick={onSubmit}
                >
                Leave
            </Button>
            
        </div>
        

    )
}

const border = {marginRight: 200,
    marginLeft: 200,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#4682B4',
    borderRadius: 5,
    borderWidth: 5,
    borderColor: '#F0FFFF',
    color: '#fff',
    textAlign: 'center',}

export default LeavePage