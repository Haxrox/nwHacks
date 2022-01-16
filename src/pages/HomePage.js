import Header from "../components/Header"
import Form from "react-bootstrap/Form"
import Button from 'react-bootstrap/Button'
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {collection, getDocs, query, onSnapshot, getFirestore } from "firebase/firestore"

function parseBuildings(snapshot) {
    const data = [];
    snapshot.forEach((doc) => {
        const totalSeats = doc.data().Floors.reduce((previousValue, currentValue) => 
            previousValue.Seats.length + currentValue.Seats.length
        );
        const freeSeats = doc.data().Floors.reduce((previousValue, currentValue) => 
            previousValue.Seats.filter(seat => !seat.Occupied).length + currentValue.Seats.filter(seat => !seat.Occupied).length
        );
        data.push(<option value={doc.id} key={doc.id}>{doc.id} [{freeSeats/totalSeats}]</option>);
    });
    return data;
  }

const Home = () => {

    const [location, setLocation] = useState();
    const history = useHistory();
    
    const [buildings, setBuildings] = useState([]);

    const firestore = getFirestore();
    const spaceCollection = collection(firestore, "Spaces");
    (async() => {
        const snapshot = await getDocs(spaceCollection);
        setBuildings(parseBuildings(snapshot));
    })();

    const handleRequestor = () => {
        history.push({
            pathname: "/request",
            data: location
        });
    }
    
    const handleResponder = () => {
        history.push({
            pathname: "/respond",
            data: location
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
                    {
                    buildings
                    /*
                    <option>Which building bro?</option>
                    <option value="1">IKB</option>
                    <option value="2">Koerner</option>
                    <option value="3">Nest</option>
                    <option value="4">LIFE</option>
                    */
                    }
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
