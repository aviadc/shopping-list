
export default function Additem(){

    function handleSubmit(event){
        event.preventDefault();
        console.log("handleSubmit")
    }
    return (
        <div className="add-item-container">
        <form onSubmit={handleSubmit}>
            <input placeholder="name"/>
            <input placeholder="amount"/>
            <button>Add</button>
        </form>
        </div>
    )
}