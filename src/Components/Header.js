import React, { useState } from 'react'
import "./Stylesheet/Header.css"
import logo from "./Images/logo.png"

function Header() {

const [menu,setMenu]=useState("planets")

    return (
        <div className='header'>
            <div className='logo'>
                <img src={logo}   alt='backgroung_image' />
                
            </div>
            <div className='menu'>
<ul>
    <li onClick={()=>{setMenu("planets")}} className={menu=="planets"?"border":"normal"}>Planets</li>
    <li onClick={()=>{setMenu("people")}} className={menu=="people"?"border":"normal"}>People</li>
    
</ul>
            </div>


        </div>
    )
}

export default Header