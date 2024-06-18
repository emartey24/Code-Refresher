import React, {useState, useEffect} from 'react';
import ReactCardFlip from "react-card-flip"; //Had to download ReactCardFlip from the npm library: and import it here



function Card(props) {
    //establishing state for the flip for the flip card
    const [flip, setFlip] = useState(false);
    //establishing state for the sign data


    const handleClick = () => {
        props.handleChoice(props.id)

    }

    useEffect(() => {
        if(props.flipper === true){
            setTimeout(()=>{
                setFlip(false)
               }, 2000)
        }
    },[props.flipper])


    
    
      
  return (
    <>
    {/* importing the flip card from the react-card-flip library, which controls the directioon, the onclick, and css of the cards */}
    <div></div>
     <ReactCardFlip isFlipped={flip}
            flipDirection="vertical">
           <div className='card' onClick={() => {setFlip(!flip); handleClick()}} style={{
                width: '225px',
                height: '120px',
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
                width: '225px',
                height: '120px',
                background: '#FBD7F8',
                fontSize: '10px',
                color: 'blue',
                margin: '20px',
                borderRadius: '4px',
                textAlign: 'center',
                padding: '40px'
            }}>
                {/* here is where i add the state */}
                <p className="libraFlip">{props.input}</p>
                
            </div>
        </ReactCardFlip>
        
</>
)}

export default Card