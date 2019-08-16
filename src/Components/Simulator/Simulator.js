import React from 'react';
import './Simulator.css';
import play from "../../Assets/btn-play.png"


function Simulator() {
  return (
    <div className="container">
        <div className="row mt-5">
            <div className="col-lg-6 col-md-7 col-sm-10 col-xs-12 ml-3 mt-5">
                <h1 className="font-weight-bold">Build applications <span className="violet font-weight-bold">faster</span></h1>
                <h5 className="font-weight-normal mt-3">Hire experts & get your job done. The right IT security solutions. Protect your clientes and computer systems from hackers and fight against malware.</h5>
                <h6 className="font-weight-light mt-5 mb-5">For as low as <span className="violet font-weight-bold">$0.95 </span>per user account</h6>
                <div className="row">
                    <div className="col-lg-4 mr-lg-5 col-md-6 mr-md-1 col-sm-6 col-xs-6">
                        <button className="btn-blue ">WATCH DEMO<img src={play} alt="btn-play"/></button>
                    </div>
                    <div className="col-lg-3 col-md-5 col-sm-5 col-xs-5">
                        <button className="btn-violet ">START NOW</button>
                    </div>
                </div>
            </div>

            <div className="col-lg-5"></div>
        </div>
        
    </div>
      
      
   
  );
}

export default Simulator;