import React from "react";
import "./p2.css";
import icon1 from '../images/Group 10.png';
import icon2 from '../images/star/star_circle.jpg';
import icon3 from '../images/crown/crown_ellipse.png';
import icon4 from '../images/chartBar/chartbar_ellipse.png';
import icon5 from '../images/chartpie/chartpie_ellipse.png';
import icon6 from '../images/figma/figma_ellipse.png'

function P2() {
    return (
        <div className="services-container">
            <section className="serv-container">
                <h1>Quality and Process Management
                </h1>
                <p>Project Management, Business Analysis and Test Management services with our expert staff who have gained experience in different sectors so that our customers can maintain their high quality levels we offer.
                </p>
            </section>
            <section className="icons-flexbox">
                <div id='first'>
                    <img src={icon1} alt=''/>
                    <h2>Document Analysis</h2>
                </div>
                <div id="second">
                    <img src ={icon2} alt=''/>
                    <h2>Acceptance and Evaluation</h2>
                </div>
                <div id="third">
                    <img src={icon3} alt=''/>
                    <h2>Business Rules Analysis</h2>
                </div>
                <div id='fourth'>
                    <img src ={icon4} alt=''/>
                    <h2>Flow Diagrams</h2>
                </div>
                <div id='fifth'>
                    <img src={icon5} alt=''/>
                    <h2>Stakeholder Analysis</h2>
                </div>
                <div id='sixth'>
                    <img src={icon6} alt=''/>
                    <h2>Prototype</h2>
                </div>
            </section>
        </div>
    );
}

export default P2;