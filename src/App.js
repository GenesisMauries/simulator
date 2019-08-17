import React from 'react';
import './App.css';
import Nav from './Components/Navbar/Navbar'
import Simulator from './Components/Simulator/Simulator'


function App() {
  return (
    <div className="container-fluid">
      <div className="container-fluid" id="bg"></div>
        <Nav/>
        <Simulator/>
    </div>
  );
}

export default App;
