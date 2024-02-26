import React from 'react'
import "./Stylesheet/Pagination.css"
import { useState } from 'react'


function Pagination({page,setPage,loading,setLoading,setPlanet,planet,setPages,pages}) {

  if(page>=1){
   return (
    <div className='buttons'>                                                                                                                                                               
      <button onClick={()=>{setPage(1)}} >One</button>
      <button onClick={()=>{setPage(2)}}>Two</button>
      <button onClick={()=>{setPage(3)}}>Three</button>
      <button onClick={()=>{setPage(4)}}>Four</button>
      <button onClick={()=>{setPage(5)}}>Five</button>
      <button onClick={()=>{setPage(6)}}>Six</button>
    
   
    </div>
  )
   }
}

export default Pagination