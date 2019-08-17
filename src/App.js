import React from 'react';
import './App.css';
import Nav from './Components/Navbar/Navbar'
import Simulator from './Components/Simulator/Simulator'
import Code from './Components/Code/Code'


function App() {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="container-fluid" id="bg"></div>
          <Nav/>
          <Simulator/>
      </div>
      <div className="container-fluid bg-gray">
        <Code/>
      </div>
    </React.Fragment>
  );
}

export default App;
