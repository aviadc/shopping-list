import React from "react";
import uuid from "react-uuid";
export default function Additem(props){
    const [data ,setData] = React.useState({item: "", amount: ""})

    function handleSubmit(event){
        event.preventDefault();
        props.addItem({...data,id: uuid()})
        event.target.reset()
    }
    
    const handelChange = (event)=>{
        setData((prev)=>{
            return{
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }
    return (
        <div className="add-item-container">
        <form onSubmit={handleSubmit}>
            <input placeholder="item" onChange={handelChange} name="item"/>
            <input placeholder="amount" onChange={handelChange} name="amount"/>
            <button>Add</button>
        </form>
        </div>
    )
}