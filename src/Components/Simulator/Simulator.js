import React, {Component} from 'react';
import './Simulator.css';
import play from "../../Assets/btn-play.png"
import Features from '../Features/Features'

class Simulator extends Component{
    state={
        monto: 0,
        tasa: 0, 
        meses: 0,
        apertura: 348,
        cat: "15.71%"
    }
    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
        // console.log(this.state.monto, this.state.tasa,this.state.meses)
    }
      
    render(){
        let porcentaje= this.state.tasa/100
        // console.log(porcentaje)

        let pagoMensual = Math.round(this.state.monto/this.state.meses*porcentaje)
        // console.log(pagoMensual)

        let montoNeto= this.state.monto*this.state.meses-this.state.apertura
        // console.log(montoNeto)
        let total = Math.round (this.state.monto+this.state.apertura*porcentaje)
        // console.log(total)

        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-6 col-md-10 col-sm-12 col-xs-12 ml-3 mt-4">
                        <h1 className="font-weight-bold">Build applications <span className="violet font-weight-bold">faster</span></h1>
                        <h5 className="font-weight-normal mt-3">Hire experts & get your job done. The right IT security solutions. Protect your clientes and computer systems from hackers and fight against malware.</h5>
                        <h6 className="font-weight-light mt-5 mb-5">For as low as <span className="violet font-weight-bold">$0.95 </span>per user account</h6>
                        <div className="row">
                            <div className="col-lg-4 mr-lg-4 col-md-4 col-sm-5 col-xs-4">
                                <button className="btn-blue ">WATCH DEMO<img src={play} alt="btn-play"/></button>
                            </div>
                            <div className="col-lg-3 col-md-5 col-sm-5 col-xs-5">
                                <button className="btn-violet ">START NOW</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-10 col-sm-12 col-xs-12 mt-4">
                        <div className="card text-center" style={{width: "75%"}}>
                            <div className="card-body">
                                <h5 className="font-weight-bold">SIMULADOR DE CRÉDITO</h5>
                                <hr id="hr-title"/>
                                <form>
                                    <p className="font-weight-bold text-right">Monto deseado</p>
                                    <input type="range" className="form-control-range" min={1000} max={5000} id="formControlRange" name="monto" value={this.state.monto} onChange={this.handleOnChange}/>
                                    <p className="font-weight-bold text-right" >Tasa anual</p>
                                    <input type="range" className="form-control-range" min={8.9} max={14} id="formControlRange" name="tasa" value={this.state.tasa} onChange={this.handleOnChange}/>
                                    <output >{this.state.tasa}</output>
                                    <div className="row">
                                        <p className="font-weight-bold text-center col-12 mt-3">Plazo en meses</p>
                                        <div className="form-check col-4">
                                            <input className="form-check-input" type="radio" name="meses"  value={12} onChange={this.handleOnChange}/>
                                            <label className="form-check-label" >
                                            12
                                            </label>
                                        </div>
                                        <div className="form-check col-4">
                                            <input className="form-check-input" type="radio" name="meses"  value={24} onChange={this.handleOnChange}/>
                                            <label className="form-check-label" >
                                            24
                                            </label>
                                        </div>
                                        <div className="form-check col-4">
                                            <input className="form-check-input" type="radio" name="meses"  value={36} onChange={this.handleOnChange}/>
                                            <label className="form-check-label" >
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
                                            <input type="text" className="input-simulator" placeholder={pagoMensual}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <p className="font-weight-light p-input text-nowrap">Comisión de apertura</p>
                                        </div>
                                        <div className="col-3">
                                            <input type="text" className="input-simulator" placeholder={this.state.apertura}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <p className="font-weight-light p-input text-nowrap">Monto neto Depositado</p>
                                        </div>
                                        <div className="col-3">
                                            <input type="text" className="input-simulator" placeholder={montoNeto} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <p className="font-weight-light p-input">Total pagado</p>
                                        </div>
                                        <div className="col-3">
                                            <input type="text" className="input-simulator" placeholder={total}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <p className="font-weight-light p-input">
                                            CAT 
                                            </p>
                                        </div>
                                        <div className="col-3">
                                            <input type="text" className="input-simulator" placeholder={this.state.cat}/>
                                        </div>
                                    </div>
                                    <button className="btn-credit mt-3">SOLICITAR MI CRÉDITO</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Features/>
            </div>
        );
    }
}

export default Simulator;