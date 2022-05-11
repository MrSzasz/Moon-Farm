import Item from "../Item/Item";

function ItemList({ items }) {

  return (
    <div className="d-flex flex-wrap w-100 justify-content-around gap-4 p-4">
      {items.map((mappedItems) => (
        <Item
          key={mappedItems.id}
          id={mappedItems.id}
          product={mappedItems.product}
          image={mappedItems.image}
          price={mappedItems.price}
        />
      ))}
    </div>
  );
}

export default ItemList;
