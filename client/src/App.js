import "./App.css";
import React from "react";
import ShoppingList from "./components/ShoppingList";
import Additem from "./components/AddItem";

function App() {
  const [shopppingData, setShoppingData] = React.useState([]);

  const addItem = (item) => {
    setShoppingData((prev) => {
      return (
        [...prev,item]
      )
    });
  };

  const delItem = (id)=>{
    setShoppingData((prev)=>{
      return (
        prev.filter((item)=>{
          return item.id !== id
        })
      )
    })
  }

  return (
    <div className="app-container">
      <h1>shopping list</h1>
      <Additem addItem={addItem} />
      <ShoppingList shoppingData={shopppingData} delItem={delItem} />
    </div>
  );
}

export default App;
