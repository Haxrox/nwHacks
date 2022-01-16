import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import SeatRequestPage from './components/SeatRequestPage.js';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"

import {useState} from 'react'
import { Routes } from './Routes';

function App() {

  const availableSeats = [
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

  return (

    <div className="App">
      <Routes/>

    </div>
  );
}

export default App;
