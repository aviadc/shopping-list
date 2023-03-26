import React from "react"


export default function UpdateItem(props){

    const myStyle = {
        right: `${props.isUpdateMode ? '-100%' : 0}`,
        transition: "right 2s ease-in-out",
    }

    return (
        <div className="update-item"  style={myStyle}>
            <form>
                <input placeholder="item" />
                <input placeholder="amount"/>
                <button>update</button>
            </form>
        </div>
    )
}