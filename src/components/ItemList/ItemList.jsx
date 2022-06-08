// =========================  STYLES  =========================

import "./ItemList.scss";

// =========================  CUSTOM IMPORTS  =========================

import Item from "../Item/Item";



function ItemList({ packs }) {
  return (
    <div className="d-flex flex-wrap w-100 justify-content-around gap-4 p-4">
      {packs.map((mappedItems) => (
        <Item
          key={mappedItems.id}
          className={mappedItems.className}
          url={mappedItems.id}
          image1={mappedItems.image1}
          image2={mappedItems.image2}
          image3={mappedItems.image3}
          image4={mappedItems.image4}
          image5={mappedItems.image5}
        />
      ))}
    </div>
  );
}

export default ItemList;
