import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import SeatRequestPage from './components/SeatRequestPage.js';
import Cheese from './components/Cheese.js';

function App() {
  return (
    <div className="App">
      <SeatRequestPage />      
      <Cheese />
    </div>
  );
}

export default App;
