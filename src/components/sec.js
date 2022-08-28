import React from "react"
import photogrid from "../images/photo-grid.png"

export default function Show (){
    return(
    <div className="section">
        <img src={photogrid} alt="fmo" width="100%"/>
        <div>
            <h1>Online Experiences</h1>
         <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
        
     </div>   
 )   
};