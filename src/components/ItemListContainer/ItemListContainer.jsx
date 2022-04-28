import "./ItemListContainer.css";

function ItemListContainer({ greeting, subGreeting }) {
  return (
    <div>
      <h1 className="greeting">{greeting}</h1>
      <h2 style={{ fontSize: 40, color: "rebeccaPurple", textAlign: "center" }}>{subGreeting}</h2>
    </div>
  );
}

export default ItemListContainer;