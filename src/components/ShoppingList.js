import React from "react"
import ShoppingItem from "./ShoppingItem";
import shoppingData from "../data"
export default function ShoppingList(){
    const [data,setData] = React.useState(shoppingData.data);
    console.log(data);
    const shoppingList = data.map((item)=>{
        return(
            <ShoppingItem name={item.name} count={item.count} />
        )
        
    })
    return (
        <>
            {shoppingList}
        </>
    )
}