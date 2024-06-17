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
            setCard1(data[0].question)
            setCard1a(data[0].answer)
            setCard2(data[1].question)
            setCard2a(data[1].answer)
            setCard3(data[2].question)
            setCard3a(data[2].answer)
            setCard4(data[3].question)
            setCard4a(data[3].answer)
            setCard5(data[4].question)
            setCard5a(data[4].answer)
            setCard6(data[5].question)
            setCard6a(data[5].answer)
            setCard7(data[6].question)
            setCard7a(data[6].answer)
            setCard8(data[7].question)
            setCard8a(data[7].answer)
            setCard9(data[8].question)
            setCard9a(data[8].answer)
            setCard10(data[9].question)
            setCard10a(data[9].answer)
        })
    })


  return (
    <>
    

        <div className='cardsWrap'>

            <Card input={card1}/>
            <Card input={card1a}/>
            <Card input={card2}/>
            <Card input={card2a}/>
            <Card input={card3}/>
            <Card input={card3a}/>
            <Card input={card4}/>
            <Card input={card4a}/>
            <Card input={card5}/>
            <Card input={card5a}/>
            <Card input={card6}/>
            <Card input={card6a}/>
            <Card input={card7}/>
            <Card input={card7a}/>
            <Card input={card8}/>
            <Card input={card8a}/>
            <Card input={card9}/>
            <Card input={card9a}/>
            <Card input={card10}/>
            <Card input={card10a}/>

        </div>



   
    </>
  )
}

export default Game