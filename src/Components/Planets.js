import React, { useEffect } from 'react'
import { useState } from 'react'

import "./Stylesheet/Planets.css"
function Planets({planet,loading,page,setPlanet}) {
  if(loading){ 

    return <div><h1>Loading...</h1></div>
  }
  


  
  
  
  
  
  
  
  
  
  return  <ul className='planetCard'>
{planet.map((item,i)=>(
<div key={i} className='cards'>
    
    <h1>{item.name}</h1>
    <h3>Population  : {item.population}</h3>
    <h3>Climate     : {item.climate}</h3>
    <h3>Terrain    : {item.terrain}</h3>

    </div>
))}
  </ul>

}

export default Planets