import React from "react";
import uuid from "react-uuid";
export default function Additem(props){
    const [data ,setData] = React.useState({item: "", amount: ""});
    const [errorMessage,setErrorMessage] = React.useState(""); 

    function handleSubmit(event){
        event.preventDefault();
        if(!isFiledsErrors()){     
            console.log("handle submit");
            setErrorMessage("");
            props.addItem({...data,id: uuid()})
            event.target.reset()
        }
    }
    
    const handelChange = (event)=>{
        setData((prev)=>{
            return{
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }

    const isFiledsErrors = ()=>{
        if(!data.item){
            setErrorMessage("item field empty")
            return true;
        }
        if(!data.amount){
            setErrorMessage("amount field empty")
            return true;
        }
        return false;
    }


    return (
        <div className="add-item-container">
        {errorMessage && <h2>{errorMessage}</h2>}
        <form onSubmit={handleSubmit}>
            <input placeholder="item" onChange={handelChange} name="item"/>
            <input placeholder="amount" onChange={handelChange} name="amount"/>
            <button>Add</button>
        </form>
        </div>
    )
}