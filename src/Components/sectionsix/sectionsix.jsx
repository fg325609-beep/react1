import "./sectionsix.scss";
import React from 'react';
 
function Sectionsix(){
    return(
        <>
       <footer>
    <div className="container">
        {/* 1-ustun: Logo va ma'lumot */}
        <div className="footer-info"> 
            <img src="img/logo.png" alt="Thousand Sunny Logo" />
            <p>Plan and book your perfect trip with expert advice, travel tips destination information from us</p>
            <p className="copyright">©2020 Thousand Sunny. All rights reserved</p>
        </div>

        {/* 2-ustun: Destinations */}
        <ul>
            <li><strong>Destinations</strong></li>
            <li><a href="#africa">Africa</a></li>
            <li><a href="#antarctica">Antarctica</a></li>
            <li><a href="#asia">Asia</a></li>
            <li><a href="#europe">Europe</a></li>
            <li><a href="#america">America</a></li>
        </ul>

        {/* 3-ustun: Shop */}
        <ul>
            <li><strong>Shop</strong></li>
            <li><a href="#guides">Destination Guides</a></li>
            <li><a href="#gifts">Pictorial & Gifts</a></li>
            <li><a href="#offers">Special Offers</a></li>
            <li><a href="#delivery">Delivery Times</a></li>
            <li><a href="#faqs">FAQs</a></li>
        </ul>

        {/* 4-ustun: Interests */}
        <ul>
            <li><strong>Interests</strong></li>
            <li><a href="#adventure">Adventure Travel</a></li>
            <li><a href="#art">Art And Culture</a></li>
            <li><a href="#wildlife">Wildlife And Nature</a></li>
            <li><a href="#family">Family Holidays</a></li>
            <li><a href="#food">Food And Drink</a></li>
        </ul>
    </div>
</footer>
        </>
    )
}
export default Sectionsix;
