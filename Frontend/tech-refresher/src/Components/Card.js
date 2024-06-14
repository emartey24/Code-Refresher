import React, {useState, useEffect} from 'react';
import ReactCardFlip from "react-card-flip"; //Had to download ReactCardFlip from the npm library: and import it here



function Card() {
    //establishing state for the flip for the flip card
    const [flip, setFlip] = useState(false);
    //establishing state for the sign data
    const [libra, setLibra] = useState("");
    //Using UseEffect to onload the Fetch call for my detailed horoscope data for each sign  from my API
    useEffect(() =>{
        const myHeaders = new Headers();
        myHeaders.append("X-RapidAPI-Key", "4833fa5f73mshf20639fcc428dc0p19bf44jsn63635ad62d44");
        const requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow"
        };
        fetch("https://horoscope-astrology.p.rapidapi.com/sign?s=libra", requestOptions)
        .then((response)=> response.json())
        .then((result) => {
          setLibra(result.about); //fetches horoscope data for sign and updates the state to the detailed sign info .
                                      //result is the object and about is the property we are pulling.
          console.log(result);})
      },[])
  return (
    <>
    {/* importing the flip card from the react-card-flip library, which controls the directioon, the onclick, and css of the cards */}
    <div></div>
     <ReactCardFlip isFlipped={flip}
            flipDirection="vertical">
           <div onClick={() => setFlip(!flip)} style={{
                width: '470px',
                height: '400px',
                fontSize: '40px',
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
                width: '700px',
                height: '700px',
                background: '#FBD7F8',
                fontSize: '20px',
                color: 'blue',
                margin: '20px',
                borderRadius: '4px',
                textAlign: 'center',
                padding: '20px'
            }}>
                {/* here is where i add the state */}
                <p className="libraFlip">{libra}</p>
                <br />
                <button style={{
                    width: '150px',
                    padding: '10px',
                    fontSize: '20px',
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