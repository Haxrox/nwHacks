import Header from '../components/Header'
import AvailableSeat from '../components/AvailableSeat'
import PropTypes from 'prop-types'
import { useHistory } from "react-router-dom";
import {Firestore, GetDocument, Listen, Unsubscribe} from "../firebase.js"
import { doc, getDoc, getFirestore } from "firebase/firestore"
import React, { useEffect, useState } from "react";
import { getAuth } from 'firebase/auth';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FaRedo } from "react-icons/fa";


var seatData = 0;
var availableSeatData = [];
var seatDocument, requestDocument;

function getSeatsData(data) {
  seatData = data.Floors.reduce((previousValue, currentValue) => 
    previousValue.Seats.filter(seat => !seat.Occupied).length + currentValue.Seats.filter(seat => !seat.Occupied).length
  );
  return seatData;
}

function getAvailableSeatsData(data) {
  availableSeatData = Object.values(data).filter(element => element.leaveTime > Date.now());
  availableSeatData.sort((firstElement, secondElement) => firstElement.leaveTime - secondElement.leaveTime).forEach((seat) => {
    seat.leaveTime = new Date(seat.leaveTime).toLocaleTimeString('en-US');
    seat.waitTime = new Date(seat.leaveTime).getMinutes();
    seat.id = seat.userData.uid;
  });
  return availableSeatData;
}

const SeatRequestPage = () => {

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
  
    const history = useHistory();
    const building = history.location.data || "IKB"; // default to IKB for now
    console.log(building);
    const [seats, setSeats] = useState(seatData);
    const [availableSeats, setAvailableSeats] = useState(availableSeatData);

    useEffect(() => {
      Unsubscribe(seatDocument);
      Unsubscribe(requestDocument);
      seatDocument = doc(Firestore, "Spaces", building);
      requestDocument = doc(Firestore, building, "Requesters");
      Listen(seatDocument, "freeSpace", (data) => {
        setSeats(getSeatsData(data));
      });
      Listen(requestDocument, "request", (data) => {
        setAvailableSeats(getAvailableSeatsData(data));
      });
    }, [building]);

    useEffect(() => {
      GetDocument("Spaces", building).then(data => {
        setSeats(getSeatsData(data));
      }).catch((error) => {
        console.error("Space error - " + error);
      });
    }, []);

    useEffect(() => {
      GetDocument(building, "Requesters").then(data => {
        setAvailableSeats(getAvailableSeatsData(data));
      }).catch((error) => {
        console.error("Requesters error - " + error);
      });
    }, []);
    
    /*
        {
          responderMessage: "Hi my name is Joe Mama and I'm sitting behind you",
          leaveTime: "4:00PM",
          waitTime: "5 mins",
          tokenCost: "1",
          id: "1",
        },
        {
          responderMessage: "Hi my name is Sina Allen and I'm sitting in front of you",
          leaveTime: "44:00PM",
          waitTime: "55 mins",
          tokenCost: "2",
          id: "2",
        },
        {
          responderMessage: "Hi my name is Kerry Wang and I'm sitting beside you",
          leaveTime: "444:00PM",
          waitTime: "555 mins",
          tokenCost: "3",
          id: "3",
        },
      ]
      */

    return (
        <div>
            <Header tokens={userTokenCount} user={userDisplayname}/>
            <br></br>
            <Container  fluid="md">
                <Row >
                    <Col md="9">
                    <Button className='full-width-btn' variant="info" onClick={e => {
                      setSeats(seatData);
                      setAvailableSeats(availableSeatData)}}><FaRedo /></Button>
                    </Col>
                    <Col md="3">
                    <Button className='full-width-btn' variant="danger" onClick={e => {
                    history.push("/home")}}>Cancel</Button>
                    </Col>
                </Row>
                <Row>
                  <Col className='info-announcement'>
                  <h2  className='font-link'>{availableSeatData.length} seats soon to be available at {building} </h2>
                  </Col>
                </Row>
            </Container>
                
            {availableSeats.map((obj)=> (
                <AvailableSeat key={obj.id} building={building} availableSeat={obj}/>
            ))}

        </div>
    )
}

SeatRequestPage.defaultProps = {
    building: "Building X",
    seats: 0
}

SeatRequestPage.propTypes = {
    building: PropTypes.string,
    seats: PropTypes.number
}

export default SeatRequestPage

