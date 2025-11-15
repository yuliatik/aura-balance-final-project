import React, { useState } from 'react';
import './Review.css';
import { data } from './data.jsx';


function Reviews (){
  const[person, setPerson] = useState(0);
  const { name, text } = data[person];
  console.log(data);

  const previousPerson = () => {
    setPerson((person => {
      person --;
      if(person <0 ){
        return data.length-1;
      }
      return person;
    }))

  }

  const nextPerson = () => {
    setPerson((person =>{
      person++;

      if(person > data.length-1) {
        person = 0;
      }
      return person;
    }))
    
  }

  return(
    <div className='reviews'>
     
      <div>
        <h2>Was unsere Kunden sagen</h2>
      </div>
      
      <div className='id'>{text}</div>
      <div className='id'>{name}</div>
     
    
<div className="button-container">
    <button className="arrow-btn" onClick={previousPerson}>&#8592; 
    </button>
    <button className="arrow-btn" onClick={nextPerson}>
      &#8594; 
    </button>
</div>

</div>

  )

}


export default Reviews;
