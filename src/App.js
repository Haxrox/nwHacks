import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import SeatRequestPage from './components/SeatRequestPage.js';
import Cheese from './components/Cheese.js';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"
import Login from "./components/Login"
import {useState} from 'react'
import {collection, getDocs, query, onSnapshot, getFirestore } from "firebase/firestore"
import { Routes } from './Routes';

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

  onSnapshot(query(spaceCollection), (snapshot => {
    parseSpaces(snapshot, setBuilding, setSeatCount);
  }));

  return (
    <div className="App">
      <Routes/>
    </div>
  );
}

export default App;
