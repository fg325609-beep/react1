import "./hero.scss";
import React from 'react';

function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-left">
                    <h1>Explore andTravel</h1>
                    <p>Holiday finder</p>
                    <span>
                        <select>
                            <option value="">Location</option>
                            <option value="">Grade</option>
                            <option value="">Activity</option>
                            <option value="">Date</option>
                        </select>
                        <select>
                            <option value="">Location</option>
                            <option value="">Grade</option>
                            <option value="">Activity</option>
                            <option value="">Date</option>
                        </select>
                        <select>
                            <option value="">Location</option>
                            <option value="">Grade</option>
                            <option value="">Activity</option>
                            <option value="">Date</option>
                        </select>
                        <select>
                            <option value="">Location</option>
                            <option value="">Grade</option>
                            <option value="">Activity</option>
                            <option value="">Date</option>
                        </select>
                            <a href="">Explore</a>
                    </span>
                </div>
                <div className="hero-right">
                    <img src="img/hero-img.png" alt="" />
                </div>
            </div>
        </section>
    );
}

export default Hero;