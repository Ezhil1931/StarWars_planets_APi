import React, { useEffect } from 'react'

function Summa() {

    let array=[{}];
    let num=0;
  useEffect(()=>{
console.log("Summma Function ")
const third=async()=>{

    for(let  i=1;i<=num;i++){

        try{
          let response=await fetch("https://swapi.dev/api/planets/"+i);
          let data = await response.json();
     array[num]=data;
          
           num++;
        }
        catch(err){
    console.log("Loop not running properly")
        }
      }
      console.log(array);
    }

   third();

},[])
    return (
    <div></div>
  )
}

export default Summa