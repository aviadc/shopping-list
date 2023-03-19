import React from "react"
import api from "../api/data"


export default function UpdateItem(props){
    const [amount,setAmount] = React.useState('');

    const myStyle = {
        right: `${props.isUpdateMode ? '-50%' : 0}`,
        transition: "right .5s ease-in-out",
        width: '50%',
        position: "absolute",
        zIndex: '2',
    }

    const handleChange = (event)=>{
        setAmount(event.target.value);
    }

    const handleClick = (id,amount)=>{
        if(!amount){
            return
        }
        props.UpdateItem(id,amount);
        props.setIsUpdateMode(false)
        setAmount('');
    }

    const handleApi = async ()=>{
        const result = await api.get()
        console.log('resultApi', result);
    }


    return (
        <div className="update-item"  style={myStyle}>
                <input placeholder="amount" onChange={handleChange} value={amount}/>
                <button onClick={()=>handleClick(props.id,amount)}>update</button>
                <button onClick={handleApi}>cancel</button>
        </div>
    )
}