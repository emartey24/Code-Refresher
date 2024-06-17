import React, {useState, useEffect} from 'react';
import ReactCardFlip from "react-card-flip"; //Had to download ReactCardFlip from the npm library: and import it here



function Card(props) {
    //establishing state for the flip for the flip card
    const [flip, setFlip] = useState(false);
    //establishing state for the sign data
    const [libra, setLibra] = useState();
    
    
      
  return (
    <>
    {/* importing the flip card from the react-card-flip library, which controls the directioon, the onclick, and css of the cards */}
    <div></div>
     <ReactCardFlip isFlipped={flip}
            flipDirection="vertical">
           <div className='card' onClick={() => setFlip(!flip)} style={{
                width: '150px',
                height: '150px',
                fontSize: '40px',
                backgroundColor: 'white',
                color: 'green',
                margin: '20px',
                borderRadius: '4px',
                textAlign: 'center',
                padding: '20px'
            }}>
                <br />
                <br />
            </div>
            <div style={{
                width: '150px',
                height: '150px',
                background: '#FBD7F8',
                fontSize: '10px',
                color: 'blue',
                margin: '20px',
                borderRadius: '4px',
                textAlign: 'center',
                padding: '20px'
            }}>
                {/* here is where i add the state */}
                <p className="libraFlip">{props.input}</p>
                <br />
                <button style={{
                    width: '50px',
                    padding: '10px',
                    fontSize: '8px',
                    background: '#F5D9FA',
                    fontWeight: 'bold',
                    borderRadius: '5px'
                }} onClick={() => setFlip(!flip)}>
                
                    Flip</button>
            </div>
        </ReactCardFlip>
        
</>
)}

export default Card