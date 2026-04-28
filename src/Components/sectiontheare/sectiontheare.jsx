import "./sectiontheare.scss";
import React from 'react';

function Sectiontheare() {
    return (
        <section className="section-three"> {/* Klas nomini aniqroq berdik */}
            <div className="container">
                <div className="section-wrapper"> {/* Iloji boricha 'theare' kabi xato so'zlardan qoching */}
                    <div className="left">
                        <h1>Guides by Thousand Sunny</h1>
                        <p>Packed with tips and advice from our on-the-ground experts, our city guides app (iOS and Android) is the ultimate resource before and during a trip.</p>
                        <a href="#" className="download-btn">Download</a> {/* href bo'sh bo'lmasin */}
                    </div>
                    <div className="right">
                        {/* Rasm borligiga va yo'li to'g'riligiga ishonch hosil qiling */}
                        <img src="/img/sectiontheare.png" alt="City Guides App" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Sectiontheare;