import "./App.css";
import React from "react";
import ShoppingList from "./components/ShoppingList";
import Additem from "./components/AddItem";
import api from "./api/data"


function App() {
  const [shopppingData, setShoppingData] = React.useState([]);

  React.useEffect(()=>{
    const getSoppongList=async ()=>{
      try{
        const {data} = await api.get('/');
        setShoppingData(data);
      }catch(err){
        console.log(err);
      }
    }
    getSoppongList();
  },[])

  const addItem = async (item) => {
    try{
      const newItem = await api.post('/',item);
      console.log(newItem)
    }catch(err){
      console.log("error:ad item:",err)
    }
    // setShoppingData((prev) => {
    //   return (
    //     [...prev,item]
    //   )
    // });
  };

  const delItem = async (id)=>{
    try{
      await api.delete(`/${id}`);
    }catch(err){
      console.log(err)
    }
    // setShoppingData((prev)=>{
    //   return (
    //     prev.filter((item)=>{
    //       return item._id !== id
    //     })
    //   )
    // })
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
