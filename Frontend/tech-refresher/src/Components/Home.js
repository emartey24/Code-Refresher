import React from 'react'
import TRnobakcground from '../Images/TRlogonobackgroundpng.png';
import Navbarcomponent from './Navbarcomponent';

function Home() {


  return (
    <>
  <Navbarcomponent />
    
    <div className="App">
     <img src={TRnobakcground} /> 
    </div>

    <hr></hr>

   <div className='about'><h2> 
Tech-Refresher is an innovative yet nostalgic approach to educating and refreshing new and aspiring developers with the foundational  coding languages, frameworks, and technology concepts. <br></br> Tech Refresher is a web application that doubles as an educational flash-card styled memory game. <br></br>

<br></br>Just like a standard memory game, the user is offered the chance to choose two random cards at a time out of a 20 card digital pile cards and match the information with the respective language. <br></br>

<br></br>Tech-Refresher was developed for and by coding students. We recognized the struggle to constantly remember every single coding language, concept, and framework. We wanted to offer a fun and practical solution to help new and aspiring coders mentally refresh their coding skillsets. 
<br></br>  <a href="http://localhost:3001/api-docs/">Swagger documentation here</a>

 </h2>

</div> 
    
    

    </>
    
  )
}

export default Home