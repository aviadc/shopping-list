import React from "react"


export default function UpdateItem(props){

    const myStyle = {
        position: 'absolute',
        zIndex: 1,
        width: '100%',
        right: `${props.isUpdateMode ? '-100%' : 0}`,
        transition: "right .4s ease-in-out",
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