import React from 'react';
import './Navbar.css';
import down from "../../Assets/drop-down.png"

function Nav(){
    return(
        <div className="container">
            <nav className="navbar navbar-expand-lg">
                <p className="navbar-brand" href="/#">LATERAL</p>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item mr-3">
                            <a className="nav-link" href="/#">HOME <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item mr-3">
                            <a className="nav-link" href="/#">FEATURES <img src={down} id="btn-down" alt="btn-down"/></a>
                        </li>
                        <li className="nav-item mr-3">
                            <a className="nav-link" href="/#">PRICING</a>
                        </li>
                        <li className="nav-item mr-3">
                            <a className="nav-link" href="/#">CONTACT</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <button className="btn-nav btn1 mr-4 my-2 my-sm-0" type="submit">LOGIN</button>  
                        <button className="btn-nav btn2 my-2 my-sm-0" type="submit">GET STARTED</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}
export default Nav;