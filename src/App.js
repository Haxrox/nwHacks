import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import SeatRequestPage from './components/SeatRequestPage.js';
import Cheese from './components/Cheese.js';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage"
import Login from "./components/Login"
import {useState} from 'react'
import {collection, getDocs, query, onSnapshot, getFirestore } from "firebase/firestore"

function parseSpaces(snapshot, setBuilding, setSeatCount) {
  snapshot.forEach((doc) => {
    console.log(doc);
    setBuilding(doc.id);
    const seat = doc.data().Floors.reduce((previousValue, currentValue) => 
      previousValue.Seats.filter(seat => !seat.Occupied).length + currentValue.Seats.filter(seat => !seat.Occupied).length
    );
    console.log(seat);
    setSeatCount(seat);
  });
}

function App() {
  const [building, setBuilding] = useState('');
  const [seatCount, setSeatCount] = useState('');

  const firestore = getFirestore();
  const spaceCollection = collection(firestore, "Spaces");
  (async() => {
    const snapshot = await getDocs(spaceCollection);
    parseSpaces(snapshot, setBuilding, setSeatCount);
  })();

  const availableSeats = [
    {
      responderMessage: "Hi my name is Joe Mama and I'm sitting behind you",
      leaveTime: "4:00PM",
      waitTime: "5 mins",
      id: "1",
    },
    {
      responderMessage: "Hi my name is Sina Allen and I'm sitting in front of you",
      leaveTime: "44:00PM",
      waitTime: "55 mins",
      id: "2",
    },
    {
      responderMessage: "Hi my name is Kerry Want and I'm sitting beside you",
      leaveTime: "444:00PM",
      waitTime: "555 mins",
      id: "3",
    },
  ]

  onSnapshot(query(spaceCollection), (snapshot => {
    parseSpaces(snapshot, setBuilding, setSeatCount);
  }));

  return (
    <div className="App">
      {/* <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />

        <Route exact path="/home" component={HomePage} />
        <Route exact path="/kimchi" component={Header} />

      </Switch>
    </BrowserRouter> */}

    <SeatRequestPage availableSeats={availableSeats}/>
    </div>
  );
}


export default App;
