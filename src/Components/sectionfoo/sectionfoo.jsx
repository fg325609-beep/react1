import "./sectionfoo.scss";
import React from 'react';

function Sectionfoo(){
    return(
        <>
        <section>
            <div className="container">
                <div className="sectionfoo">
                    <div className="title">
                        <h1>Testimonials</h1>
                    </div>
                    <div className="sectionfoo-wrapper">
                    <div className="sectionfoo-left">
                      <h1>“Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”</h1>
                      <p>Edward Newgate</p>
                      <a href="">Founder Circle</a>
                    </div>
                    <div className="sectionfoo-right">
                        <img src="img/sectionfoo.png" alt="" />
                    </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Sectionfoo;