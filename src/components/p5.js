import React from "react";
import './p5.css';
import airbnb from '../images/Airbnb Logo.png';
import google from '../images/Google Logo.png';
import bookmyshow from '../images/BookMyShow Logo.png';
import ola from '../images/OLA Logo.png';
import fedex from '../images/FedEx Logo.png';
import amazon from '../images/Amazon Logo.png';
import microsoft from '../images/Microsoft Logo.png';
import oyo from '../images/OYO Logo.png';
import walmart from '../images/Walmart Logo.png';
import logos from '../images/Logos.png';


function P5() {
    return(
        <div className="sponsors-container">
            <section className="sponsors">
            <h1>Our References</h1>
            <p>Our business partners who trusts us</p>
            {/* <section className="logos"></section>
            <img src={microsoft} alt="microsoft" className="mfw-stle"/>
            <img src={google} alt="google" className="gb-style"/>
            <img src={walmart} alt="walmart" className="mfw-style"/>
            <img src={oyo} alt="oyo"/>
            <img src={ola} alt="ola"/>
            <img src={amazon} alt="amazon"/>
            <img src={fedex} alt="fedex" className="mfw-style"/>
            <img src={airbnb} alt="airbnb" className="airbnb-style"/>
            <img src={bookmyshow} alt="bookmyshow" className="gb-style"/>
            <section/> */}
            </section>
            <section className="logos">
                <img src={logos} alt=""></img>
            </section>
        </div>
    );
}

export default P5;