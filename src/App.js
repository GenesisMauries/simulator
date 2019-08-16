import React from 'react';
import './App.css';
import Nav from './Components/Navbar/Navbar'
import Simulator from './Components/Simulator/Simulator'
import bg from "./Assets/bg.jpg"

function App() {
  return (
    <div className="container-fluid">
    <img src={bg}  id="bg" alt="bg" className="card-img"/>
      <Nav/>
      <Simulator/>
    </div>
  );
}

export default App;
