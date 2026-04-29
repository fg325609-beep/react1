import "./sectionsix.scss";
import React from 'react';
 
function Sectionsix(){
    return(
        <>
        <footer>
    <div className="container">
        {/* Logo va ma'lumot qismi */}
        <ul>
            <li><img src="img/logo.png" alt="Logo" /></li>
            <li><p>Plan and book your perfect trip with expert advice, travel tips destination information from us</p></li>
            <li><p>©2020 Thousand Sunny. All rights reserved</p></li>
        </ul>

        {/* Destinations qismi */}
        <ul>
            <li><a href="#">Destinations</a></li>
            <li><a href="#">Africa</a></li>
            <li><a href="#">Antarctica</a></li>
            <li><a href="#">Asia</a></li>
            <li><a href="#">Europe</a></li>
            <li><a href="#">America</a></li>
        </ul>

        {/* Shop qismi */}
        <ul>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Destination Guides</a></li>
            <li><a href="#">Pictorial & Gifts</a></li>
            <li><a href="#">Special Offers</a></li>
            <li><a href="#">Delivery Times</a></li>
            <li><a href="#">FAQs</a></li>
        </ul>

        {/* Interests qismi */}
        <ul>
            <li><a href="#">Interests</a></li>
            <li><a href="#">Adventure Travel</a></li>
            <li><a href="#">Art And Culture</a></li>
            <li><a href="#">Wildlife And Nature</a></li>
            <li><a href="#">Family Holidays</a></li>
            <li><a href="#">Food And Drink</a></li>
        </ul>
    </div>
</footer>
        </>
    )
}
export default Sectionsix;
