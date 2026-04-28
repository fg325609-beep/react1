import "./sectiontwo.scss";
import React from 'react';
function Sectiontwo(){
    return(
        <>
      <section className="two">
       <div className="container">
        <div className="title">
            <h1>Featured destinations</h1>
            <a href="">View all  </a>
        </div>
        <div className="cards">
            <div className="card">
                <img src="img/card.png" alt="" />
            </div>
            <div className="card">

                <img src="img/card (2).png" alt="" />
            </div>
            <div className="card">

                <img src="img/card (3).png" alt="" />
            </div>
            <div className="card">

                <img src="img/card (4).png" alt="" />
            </div>
        </div>
       </div>
         
      </section>
        </>
    )
}
export default Sectiontwo;