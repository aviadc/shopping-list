import React from "react";

export default function UpdateItem(props) {
  const [amount, setAmount] = React.useState("");

  const myStyle = {
    position: "absolute",
    zIndex: 1,
    width: "100%",
    right: `${props.isUpdateMode ? "-100%" : 0}`,
    transition: "right .4s ease-in-out",
  };

  const handleChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (amount) {
      props.updateItem(props.id,amount);
      setAmount("");
      props.setIsUpdateMode(false);
    }
  };

  return (
    <div className="update-item" style={myStyle}>
      <form onSubmit={handleSubmit}>
        <input placeholder="amount" value={amount} onChange={handleChange} />
        <button>update</button>
      </form>
    </div>
  );
}
