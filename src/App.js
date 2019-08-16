import React from 'react';
import './App.css';
import Nav from './Components/Navbar/Navbar'
import Simulator from './Components/Simulator/Simulator'

function App() {
  return (
    <div className="container-fluid">
      <Nav/>
      <Simulator/>
    </div>
  );
}

export default App;
