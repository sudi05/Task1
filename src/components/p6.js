import React from "react";
import './p6.css';
import users from '../images/Users.png';

function P6 (){
    return (
        <div className="users-container">
            <section className="user-container">
                <img src={users} alt="users"/>
                <h1>Contact Us</h1>
                <p>Contact us for detailed information about our solutions, services and products.</p>
            </section>
            <section className="body-content3">
                <section className="body-content-info3">
                    <p>Contact Us</p>
                </section>
            </section>
        </div>
    );
}

export default P6;