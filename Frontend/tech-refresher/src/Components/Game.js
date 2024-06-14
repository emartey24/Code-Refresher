import React from 'react'
import { useEffect, useState } from 'react'
import ReactCardFlip from 'react-card-flip';
import Card from './Card';

function Game() {

    //establishing state for the flip for the flip card
    const [flip, setFlip] = useState(false);
    

    const [card1, setCard1] = useState()
    const [card1a, setCard1a] = useState()
    const [card2, setCard2] = useState()
    const [card2a, setCard2a] = useState()
    const [card3, setCard3] = useState()
    const [card3a, setCard3a] = useState()
    const [card4, setCard4] = useState()
    const [card4a, setCard4a] = useState()
    const [card5, setCard5] = useState()
    const [card5a, setCard5a] = useState()
    const [card6, setCard6] = useState()
    const [card6a, setCard6a] = useState()
    const [card7, setCard7] = useState()
    const [card7a, setCard7a] = useState()
    const [card8, setCard8] = useState()
    const [card8a, setCard8a] = useState()
    const [card9, setCard9] = useState()
    const [card9a, setCard9a] = useState()
    const [card10, setCard10] = useState()
    const [card10a, setCard10a] = useState()


    useEffect(() => {
        fetch('http://localhost:3001/tech')
        .then(result => result.json())
        .then(data => {
            console.log(data)
            setCard1(data[0].name)
            setCard1a(data[0].answer)
            setCard2(data[1].name)
            setCard2a(data[1].answer_img)
            setCard3(data[2].name)
            setCard3a(data[2].answer_img)
            setCard4(data[3].name)
            setCard4a(data[3].answer_img)
            setCard5(data[4].name)
            setCard5a(data[4].answer_img)
            setCard6(data[5].name)
            setCard6a(data[5].answer_img)
            setCard7(data[6].name)
            setCard7a(data[6].answer_img)
            setCard8(data[7].name)
            setCard8a(data[7].answer_img)
            setCard9(data[8].name)
            setCard9a(data[8].answer_img)
            setCard10(data[9].name)
            setCard10a(data[9].answer_img)
        })
    })


  return (
    <center>
    <br/>
    <br/>
    <Card/>
    <div>{card1}</div>
    <div>{card1a}</div>
    <div>{card2}</div>
    <div><img src={card2a} alt='card 2 answer'></img></div>
    <div>{card3}</div>
    <div><img src={card3a} alt='card 1 answer'></img></div>
    <div>{card4}</div>
    <div><img src={card4a} alt='card 1 answer'></img></div>
    <div>{card5}</div>
    <div><img src={card5a} alt='card 1 answer'></img></div>
    <div>{card6}</div>
    <div><img src={card6a} alt='card 1 answer'></img></div>
    <div>{card7}</div>
    <div><img src={card7a} alt='card 1 answer'></img></div>
    <div>{card8}</div>
    <div><img src={card8a} alt='card 1 answer'></img></div>
    <div>{card9}</div>
    <div><img src={card9a} alt='card 1 answer'></img></div>
    <div>{card10}</div>
    <div><img src={card10a} alt='card 1 answer'></img></div>

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
                <p className="libraFlip">{card1}</p>
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
    </center>
  )
}

export default Game