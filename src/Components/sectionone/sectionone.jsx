import "./sectionone.scss";
import React from 'react';
function Sectionone(){
    return(
        <>
        <section className="one">
            <div className="container">
                <div className="one-left">
                    <img src="img/sectionone.png" alt="" />

                </div>
                <div className="one-right">
                    <h1>A new way to explore the world </h1>
                    <p>For decades travellers have reached for Lonely Planet books when looking to plan and execute their perfect trip, but now, they can also let Lonely Planet Experiences lead the way</p>
                    <a href="">Learn more</a>
                </div>
            </div>

        </section>
        </>
    )
}
export default Sectionone;