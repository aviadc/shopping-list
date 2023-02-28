

export default function ShoppingItem(props) {
  return (
    <div className="shopping-item">
      <h2>{props.name}</h2>
      <h3>{props.count}</h3>
    </div>
  );
}
