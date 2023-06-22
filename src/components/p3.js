import React from "react";
import './p3.css';
import caret_circle from '../images/CaretCircleDoubleRight.png';

function P3 (){
    return (
        <div className="stats-container">
            <section className="stat-container1">
            <h1>What Do We Provide With Test Management?</h1>
            <p>IoT Supported Solutions
            </p>
            </section>
            <section className="stat-container2">
                <div className="stat1">
                    <p>We Increase Software Quality</p>
                </div>

                <div className="stat2">
                    <img src={caret_circle} alt="next"></img>
                </div>

                <div className="stat3">
                    <p>We Predict Possible Errors</p>
                </div>

                <div className="stat4">
                    <img src={caret_circle} alt='next'></img>
                </div>

                <div className="stat5">
                    <p>We Prevent Possible Risks</p>
                </div>

                <div className="stat6">
                    <img src={caret_circle} alt='next'></img>
                </div>

                <div className="stat7">
                    <p>We Save Time and Cost</p>
                </div>
            </section>
        </div>
    );
}

export default P3;