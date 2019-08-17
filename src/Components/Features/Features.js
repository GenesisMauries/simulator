import React from 'react';
import './Features.css';
import Responsive from '../../Assets/icons/icons-64-violet/responsive-64.png'
import Chart from '../../Assets/icons/icons-64-violet/desktop-chart-64.png'
import Browser from '../../Assets/icons/icons-64-violet/browser-64.png'
import Multiple from '../../Assets/icons/icons-64-violet/desktop-windows-64.png'
import Customizer from '../../Assets/icons/icons-64-violet/customizer-64.png'
import User from '../../Assets/icons/icons-64-violet/users-64.png'

function Features() {
  return (
    <div className="container-fluid mb-5">
        <div className="row mx-auto mt-5">
            <div className="col-12 text-center mt-5">
                <h2 className="font-weight-bold">Feature designed for you</h2>
                <hr id="hrTitle"/>
                <div className="col-10 mx-auto">
                    <h5 className="font-weight-light"> We belive we have created the most efficient SaaS landing page for your users. Landing page with features that will convincen you to use it for your SaaS business.</h5>
                </div>
            </div>
        </div>
        <div className="row mt-5">
            <div className="col-lg-4 col-md-5 col-sm-11 col-xs-6 mt-5">
                <div className="row">
                    <div className="col-3">
                        <img src={Responsive} id="img-responsive" alt="img-responsive"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h5 className="font-weight-light">Responsive <span className="font-weight-bold">Layout Template</span></h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 float-left">
                        <hr className="hr-features"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <h6 className="font-weight-light space-text">Responsive code that makes your landing page look good on all devices (desktops, tablets, and phones). Created with mobile specialists.</h6>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-5 col-sm-11 col-xs-6 mt-5">
                <div className="row">
                    <div className="col-3">
                        <img src={Chart} id="img-dchart" alt="dchart"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h5 className="font-weight-light"><span className="font-weight-bold">Saas Landing Page</span> Analysis</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 float-left">
                        <hr className="hr-features"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <h6 className="font-weight-light space-text">A perfect structure created after we analized trends in SaaS landing page designs.<br/> Analysis made to the most popular Saas businesses.</h6>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-5 col-sm-11 col-xs-6 mt-5">
                <div className="row">
                    <div className="col-3">
                        <img src={Browser} id="img-browser" alt="browser"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h5 className="font-weight-light"><span className="font-weight-bold">Smart</span> BEM <span className="font-weight-bold">Grid</span></h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 float-left">
                        <hr className="hr-features"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <h6 className="font-weight-light space-text">Blocks, Elements and Modifiers. A smart HTML/CSS structure that can easely be reused. Layout driven by purpose of modularity.</h6>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-5 col-sm-11 col-xs-6 mt-5">
                <div className="row">
                    <div className="col-3">
                        <img src={Multiple} id="img-multiple" alt="multiple"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h5 className="font-weight-light"><span className="font-weight-bold">Multiple</span> Unique <span className="font-weight-bold">Designs</span></h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 float-left">
                        <hr className="hr-features"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <h6 className="font-weight-light space-text">Choose between multiple unique designs <br/> and  easy integrate elements from one<br/> desing to another. Following the latest<br/> desing trends.</h6>
                    </div>
                </div>
            </div>   
            <div className="col-lg-4 col-md-5 col-sm-11 col-xs-6 mt-5">
                <div className="row">
                    <div className="col-3">
                        <img src={Customizer} id="img-customizer" alt="customizer"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h5 className="font-weight-light">Flexible<span className="font-weight-bold">HTML Sections</span></h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 float-left">
                        <hr className="hr-features"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <h6 className="font-weight-light space-text">Simple and Smart HTML code that works reintegrated in any part of the layout. Reuse the elements from one desing to another.</h6>
                    </div>
                </div>
            </div>   
            <div className="col-lg-4 col-md-5 col-sm-11 col-xs-6 mt-5">
                <div className="row">
                    <div className="col-3">
                        <img src={User} id="img-user" alt="user"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h5 className="font-weight-light">User<span className="font-weight-bold"> Friendly</span></h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 float-left">
                        <hr className="hr-friendly"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <h6 className="font-weight-light space-text">Easy to navigate. Made with user experience in mind, in order to provide the perfect landing page experiencefor your client.</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Features;