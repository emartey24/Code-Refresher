import React from 'react';
import HTP1 from '../Images/HTP1.png';
import HTP2 from '../Images/HTP2.png';
import HTP3 from '../Images/HTP3.png';

function HowtoPlay() {
  return (
    <>
    <div className="HTP">
    <img
            style={{ height: "90vh" }}
            className="d-block w-100"
            src={HTP1}
            alt="First slide"
          />
     {/* <img src={HTP1} />  */}
     <br></br>

     <img
            style={{ height: "90vh" }}
            className="d-block w-100"
            src={HTP2}
            alt="First slide"
          />
    
     <br></br>
     <img
            style={{ height: "90vh" }}
            className="d-block w-100"
            src={HTP3}
            alt="First slide"
          />


    </div>

    </>
  )
}

export default HowtoPlay