import Header from "../components/Header"
import Form from "react-bootstrap/Form"
import Button from 'react-bootstrap/Button'
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {collection, getDoc, getDocs, doc, query, onSnapshot, getFirestore } from "firebase/firestore"
import { getAuth } from 'firebase/auth'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { GetDocument } from "../firebase";

var buildingData = {};

function parseBuildings(snapshot) {
    const data = [];
    snapshot.forEach((doc) => {
        const totalSeats = doc.data().Floors.reduce((previousValue, currentValue) => 
            previousValue.Seats.length + currentValue.Seats.length
        );
        const freeSeats = doc.data().Floors.reduce((previousValue, currentValue) => 
            previousValue.Seats.filter(seat => !seat.Occupied).length + currentValue.Seats.filter(seat => !seat.Occupied).length
        );
        data.push(<option value={doc.id} key={doc.id}>{doc.id} [{freeSeats*50}/{totalSeats*72}]</option>);
    });
    return data;
}

const Home = () => {

    const [location, setLocation] = useState();
    const history = useHistory();
    
    const [buildings, setBuildings] = useState([]);

    useEffect(() => {
        const firestore = getFirestore();
        const spaceCollection = collection(firestore, "Spaces");
        (async() => {
            const snapshot = await getDocs(spaceCollection);
            setBuildings(parseBuildings(snapshot));
            setLocation(snapshot.docs[0].id);
        })();
    }, [buildingData]);
    

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

    
    const [userTokenCount, setUserTokenCount] = useState('0')
    var userDisplayname = "not logged in user"
    const auth = getAuth()
    const db = getFirestore()
    if (auth.currentUser) {
        const docRef = doc(db, "Users", auth.currentUser.uid); 
        getDoc(docRef).then((docSnap) => {
            if (docSnap.exists()) {
                console.log(docSnap.data().TokenCount.toString())
                setUserTokenCount(docSnap.data().TokenCount.toString())
            } else {
                console.log("User does not exist") 
            }
        })
        userDisplayname = auth.currentUser.displayName
    }
    
    return (
        <div className="home-body">
        <div>
            <Header tokens={userTokenCount} user={userDisplayname}/>
        </div>
        <Container className="col-sm-" fluid="md">
                <Row>
                    <Col>
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
                    </div>  
                    </Col>
                </Row>
                <Row className="margin-top">
                    <Row >
                        <Col> 
                            <Button className="full-width-btn want-seat" variant="primary" onClick={handleRequestor}>I want a seat</Button>
                        </Col>
                    </Row>
                    <Row className="margin-between">
                    <Col >
                        <Button className="full-width-btn give-seat" variant="info" onClick={handleResponder}>I can give a seat</Button>
                    </Col>
                    </Row>
                </Row>

            </Container>
            <footer></footer>      
        </div>
    )
}

export default Home
