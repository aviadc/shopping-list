import "./App.css";
import React from "react";
import ShoppingList from "./components/ShoppingList";
import Additem from "./components/AddItem";
import api from "./api/data";
// import data from "./api/data";

function App() {
  const [shopppingData, setShoppingData] = React.useState([]);

  React.useEffect(() => {
    const getShoppongList = async () => {
      try {
        const { data } = await api.get("/");
        setShoppingData(data);
        console.log("infeniteloop");
      } catch (err) {
        console.log(err);
      }
    };
    getShoppongList();
  }, []);

  const addItem = async (item) => {
    try {
      const { data } = await api.post("/", item);
      console.log(data);
      setShoppingData((prev) => {
        return [...prev, data];
      });
    } catch (err) {
      console.log("error:ad item:", err);
    }
  };

  const delItem = async (id) => {
    console.log(id);
    try {
      await api.delete(`/${id}`);
      setShoppingData((prev) => {
        return prev.filter((item) => {
          return item._id !== id;
        });
      });
    } catch (err) {
      console.log(err);
    }
  };

  const updateItem = async (id, newAmount) => {
    try{
      await api.put('/',{id,newAmount})
      setShoppingData((prev) => {
        return prev.map((item) => {
          return item._id !== id ? item : { ...item, amount: newAmount };
        });
      });
    }catch(err){
      console.log(err);
    }
  };

  return (
    <div className="app-container">
      <h1>shopping list</h1>
      <Additem addItem={addItem} />
      <ShoppingList
        shoppingData={shopppingData}
        delItem={delItem}
        updateItem={updateItem}
      />
    </div>
  );
}

export default App;
