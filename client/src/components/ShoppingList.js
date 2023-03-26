import React from "react"
import ShoppingItem from "./ShoppingItem";
// import shoppingData from "../data"
export default function ShoppingList(props){
    // const [data,setData] = React.useState(shoppingData.data);
    // console.log(data);
    const shoppingList = props.shoppingData.map(({item,amount,_id})=>{
        return(
            <ShoppingItem item={item} amount={amount} key={_id} id={_id} delItem={props.delItem} updateItem={props.updateItem}/>
        )
        
    })
    return (
        <>
            {shoppingList}
        </>
    )
}