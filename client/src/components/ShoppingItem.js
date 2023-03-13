import React from "react";
import UpdateItem from "./UpdateItem";


export default function ShoppingItem(props) {
  const[isUpdateMode,setIsUpdateMode] = React.useState(false)
  return (
    <div className="shopping-item">
      <button className="del-button" onClick={()=>props.delItem(props.id)}>del</button>
      <div>{props.amount}</div>
      <div>{props.item}</div>
      <button className="update-button" onClick={()=>setIsUpdateMode(prev=>!prev)}>Update</button>
      <UpdateItem isUpdateMode={isUpdateMode}/>
    </div>
  );
}
