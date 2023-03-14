import "./App.css";
import React from "react";
import ShoppingList from "./components/ShoppingList";
import Additem from "./components/AddItem";

function App() {
  const [shopppingData, setShoppingData] = React.useState([{item: 'milk', amount: '3', id: 1}]);

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

  const updateItem = (id,newAmount)=>{
    setShoppingData((prev)=>{
      return (
        prev.map(item=>{
          return item.id !== id ? item : {...item, amount: newAmount}
        })
      )
    })
  }

  return (
    <div className="app-container">
      <h1>shopping list</h1>
      <Additem addItem={addItem} />
      <ShoppingList shoppingData={shopppingData} delItem={delItem} updateItem={updateItem}/>
    </div>
  );
}

export default App;
