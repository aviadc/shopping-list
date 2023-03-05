

export default function ShoppingItem(props) {
  return (
    <div className="shopping-item">
      <h3>{props.amount}</h3>
      <h2>{props.item}</h2>
      <button>del</button>
    </div>
  );
}
