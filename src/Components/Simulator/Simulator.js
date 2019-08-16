import React from 'react';
import './Simulator.css';
import play from "../../Assets/btn-play.png"


function Simulator() {
  return (
    <div className="container">
        <div className="row mt-5">
            <div className="col-lg-6 col-md-7 col-sm-10 col-xs-12 ml-3 mt-4">
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

            <div className="col-lg-5 mt-4">
                <div className="card text-center  mx-3 my-2" style={{width: "20rem"}}>
                    <div className="card-body">
                        <h5 className="font-weight-bold">SIMULADOR DE CRÉDITO</h5>
                        <hr id="hr-title"/>
                        <form>
                            <p className="font-weight-bold text-right">Monto deseado</p>
                            <input type="range" className="form-control-range" min="10000" max="500000" id="formControlRange"/>
                            <p className="font-weight-bold text-right">Tasa anual</p>
                            <input type="range" className="form-control-range" id="formControlRange"/>

                            
                            <div className="row">
                                <p className="font-weight-bold text-center col-12 mt-3">Plazo en meses</p>
                                <div class="form-check col-4">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="12" />
                                    <label class="form-check-label" for="exampleRadios1">
                                        12
                                    </label>
                                </div>
                                <div class="form-check col-4">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="24" checked/>
                                    <label class="form-check-label" for="exampleRadios1">
                                        24
                                    </label>
                                </div>
                                <div class="form-check col-4">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="36" />
                                    <label class="form-check-label" for="exampleRadios1">
                                        36
                                    </label>
                                </div>

                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-6">
                                    <p className="font-weight-light p-input">
                                        Pago mensual 
                                    </p>
                                </div>
                                <div className="col-3">
                                    <input type="text" className="input-simulator"/>
                                </div>
                            </div>
                            <div className="row mx-1">
                                <div className="col-6">
                                    <p className="font-weight-light p-input text-nowrap">Comisión de apertura</p>
                                </div>
                                <div className="col-3">
                                    <input type="text" className="input-simulator"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <p className="font-weight-light p-input text-nowrap">Monto neto Depositado</p>
                                </div>
                                <div className="col-3">
                                    <input type="text" className="input-simulator"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <p className="font-weight-light p-input">Total pagado</p>
                                </div>
                                <div className="col-3">
                                    <input type="text" className="input-simulator"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <p className="font-weight-light p-input">
                                    CAT 
                                    </p>
                                </div>
                                <div className="col-3">
                                    <input type="text" className="input-simulator"/>
                                </div>
                            </div>
                            <button className="btn-credit mt-3">SOLICITAR MI CRÉDITO</button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
       
            
    </div>
      
      
   
  );
}

export default Simulator;