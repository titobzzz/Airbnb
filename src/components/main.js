import React from "react" 
import Card from "./card"
import data from "./data1.js"
console.log(data)
export default function Main(){
    const card = data.map(item=>{
        return (
            <Card 
             item={item}
             />
        )
    })
    return (
        <div className="cardList">
            {card} 
        </div>
    )
}
