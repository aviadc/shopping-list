

export default function ShoppingItem(props) {
  return (
    <div className="shopping-item">
      <h3>{props.count}</h3>
      <h2>{props.name}</h2>
    </div>
  );
}
