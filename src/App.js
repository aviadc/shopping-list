import "./App.css"
import ShoppingList from "./components/ShoppingList";
import Additem from "./components/AddItem";

function App() {
  return (
    <div className="app-container">
      <h1>shopping list</h1>
      <Additem />
      <ShoppingList />
    </div>
  );
}

export default App;
