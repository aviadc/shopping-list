import React from "react"


export default function UpdateItem(props){

    const myStyle = {
        position: 'absolute',
        // zIndex: '-1',
        right: `${props.isUpdateMode ? '-100%' : '-20%'}`,
        transition: "right .5s ease-in-out",
    }

    return (
        <div className="update-item"  style={myStyle}>
            <form>
                <input placeholder="item" />
                <input placeholder="amount"/>
                <button>update</button>
                <button>cancel</button>
            </form>
        </div>
    )
}