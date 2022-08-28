import React from "react"
import star from "../images/star.png"
export default function Card(props) {
    let stat 
    if (props.item.openSpots===0){
        stat="SOLD OUT";
    }else if (props.item.location ==="Online"){
        stat="ONLINE"
    };
  
    return (
        <div className="card">
                <div className="image">
                
                    {stat && <div className="staus">{stat}</div>}
                          
                    <img src={props.item.coverImg}  width="300px"alt=""/>
                       
                </div>
               <p className="Location_and_Star">
                   <img src={star} alt="knk" width="15px"/>
                   <span className="review">{props.item.stats.reviewCount}</span>
                   <span className="rating">({props.item.stats.rating})</span>
                   <span className="country">{props.item.country}</span>                
                </p>
                <p className="title">{props.item.title}</p>
              <p className="last" ><strong>From {props.item.price}</strong><span>/ person</span></p> 
        </div>
    )
}