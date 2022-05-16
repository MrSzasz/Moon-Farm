import "./ItemList.scss";
import Item from "../Item/Item";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

function ItemList({ packs }) {
  const { seasonUrl } = useParams();

  return (
    <div className="d-flex flex-wrap w-100 justify-content-around gap-4 p-4">
      {packs.map((mappedItems) => (
        // <Item
        //   key={mappedItems.id}
        //   id={mappedItems.id}
        //   product={mappedItems.product}
        //   image={mappedItems.image}
        //   price={mappedItems.price}
        //   url={mappedItems.detailUrl}
        //   image1={mappedItems.image1}
        //   image2={mappedItems.image2}
        //   image3={mappedItems.image3}
        //   image4={mappedItems.image4}
        //   image5={mappedItems.image5}
        // />
        <Item
          key={mappedItems.id}
          className={mappedItems.className}
          url={mappedItems.detailUrl}
          image1={mappedItems.image1}
          image2={mappedItems.image2}
          image3={mappedItems.image3}
          image4={mappedItems.image4}
          image5={mappedItems.image5}
        />
      ))}
    </div>
    // <Link to={`/tienda/${seasonUrl}/${packs.detailUrl}`}>
    //   <div className="packContainer">
    //     {packs.map((mappedPacks) => (
    //       <Item className={mappedPacks.className} />
    //     ))}
    //   </div>
    // </Link>
  );
}

export default ItemList;
