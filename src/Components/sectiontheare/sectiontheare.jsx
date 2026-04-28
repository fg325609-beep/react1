import React from 'react';
import "./sectiontheare.scss"; // Fayl nomi ham to'g'ri bo'lishi kerak

function SectionThree() {
    return (
        <section className="section-three">
  <div className="container">
    <div className="section-wrapper">
      <div className="left">
        <h1>Guides by Thousand Sunny</h1>
        <p>Packed with tips and advice from our on-the-ground experts...</p>
        <a href="#!" className="download-btn">Download</a>
      </div>
      <div className="right">
        <img src="img/sectiontheare.png" alt="City Guides App" />
      </div>
    </div>
  </div>
</section>
    );
}

export default SectionThree;