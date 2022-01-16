import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import SeatRequestPage from './components/SeatRequestPage.js';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"

import {useState} from 'react'
import { Routes } from './Routes';

function App() {
  return (
    <div className="App">
      <Routes/>
    </div>
  );
}

export default App;
