import React, { useEffect, useState } from 'react'

import Pagination from './Pagination';
import Planets from './Planets';
import "./Stylesheet/Pagination.css"
function FetchData() {

const [planet,setPlanet]=useState([]);



const [page,setPage]=useState(1);
const [loading,setLoading]=useState([false]);


useEffect(()=>{

  const fetchPlanet=async()=>{
    setLoading(true);
 
    try{
      let response=await fetch("https://swapi.dev/api/planets");
      let data = await response.json();
      setPlanet(data.results);
       setLoading(false);
    
    }
      catch(err){
      
      console.log("Something went wrong");
      
    }
  
  }
  if(page==1){
  return ()=> fetchPlanet(); 
}



},[page])

///second useEffect 
let array=[{}];
let start=0;
let end=0;
useEffect(()=>{
const nextData=async()=>{
let num=0;  
  
if(page!=1){
  for(start;start<=end;start++){

    try{

      let response=await fetch("https://swapi.dev/api/planets/"+start);
      let data = await response.json();
 array[num]=data;
    
       num++;
    }
    catch(err){

    }
  }
}
 setLoading(false); 
  
  setPlanet(array);
  console.log(array);
  }
  
const pageCheck=()=>{

if(page===2){
start=11;
end=20;

  nextData()
}

else if(page===3){
  start=21;
  end=30;
  nextData()
}

 else if(page===4){
  start=31;
  end=40;
  nextData();
}

 else if(page===5){

  start=41;
  end=50;
  nextData();


}
else{
  nextData(51,60);
}





}

return ()=>pageCheck();
  
},[page])

 
  
  return (

    <div className='content'>
    
      <Pagination
    
      page={page}
 
      setPage={setPage}
      setLoading={setLoading}
      setPlanet={setPlanet}
      planet={planet}
      loading={loading}

      />
       <Planets

page={page}
setPage={setPage}
setLoading={setLoading}
setPlanet={setPlanet}
planet={planet}
loading={loading}

/>
   </div>
  )
}

export default FetchData;