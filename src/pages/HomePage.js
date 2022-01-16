import Header from "../components/Header"
import Form from "react-bootstrap/Form"
import Button from 'react-bootstrap/Button'
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const Home = () => {

    const [location, setLocation] = useState();
    const history = useHistory();

    const handleRequestor = () => {
        history.push({
            pathname: "/request",
          });
    }
    
    const handleResponder = () => {
        history.push({
            pathname: "/responder",
          });
    }
    
    return (
        <div>
        <div>
            <Header tokens="3" user="Johnny"/>
        </div>
            <br></br>
            <br></br>
            <div style={{textAlign:"Center",}}>
                <Form.Control as="select" 
                value={location}
                onChange={e => {
            setLocation(e.target.value);
          }}>
                <option>Which building bro?</option>
                <option value="1">IKB</option>
                <option value="2">Koerner</option>
                <option value="3">Nest</option>
                <option value="4">LIFE</option>
                </Form.Control>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            <Button variant="primary" onClick={handleRequestor}>I want a seat</Button>
            <br></br>
            <br></br>
            <Button variant="info" onClick={handleResponder}>I can give a seat</Button>

            </div>            
        </div>
    )
}



export default Home
