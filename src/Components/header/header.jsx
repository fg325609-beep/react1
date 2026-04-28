import "./header.scss";
import React from 'react';

function Header() {
    return (
        <header>
            <div className="container">
                <div className="navbar">
                    <img src="img/logo.png" alt="Logo" />
                    <ul>
                        {/* Diqqat: So'zlar > belgisidan keyin kelishi shart */}
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Destinations</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Partner</a></li>
                        <li><a className="nav-btn" href="#">Login</a></li>
                        <li><a className="nav-btn" href="#">Register</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;