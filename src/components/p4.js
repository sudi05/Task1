import React from "react";
import './p4.css';
import photo1 from '../images/Illustration.jpg';
import photo2 from '../images/Illustration (1).jpg';

function P4() {
    return (
        <div className="about-container">
            <section className="container1">
                <img src = {photo1} alt='image one'/>
                <h1>Quality and Process Management</h1>
                <p>Our experienced staff consists of expert project managers with PMP certification, experienced from many different sectors. We are with you to support the management of your projects, to strengthen the areas that yoy think are weak, to implement and develop the internationally valid PMI methodology in your company.</p>
            </section>
            <section className="body-content">
                <section className="body-content-info">
                    <p>Discover</p>
                </section>
            </section>
            <section className="container2">
                <img src ={photo2} alt='image two'/>
                <h1>Test Management and Analysis</h1>
                <p>We carefully apply the tests we carry out in order to prevent software errors in the projects we consult, manually or with test automation at every project stage. Our experienced test team offers institutions a safe, high quality and satisfactory customer experience with high quality software testing services.</p>
            </section>
            <section className="body-content2">
                <section className="body-content-info2">
                    <p>Discover</p>
                </section>
            </section>
        </div>
    );
}

export default P4;