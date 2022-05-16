import { Link } from "react-router-dom";
import Item from "../Item/Item";
import "./ItemDetail.scss";

const ItemDetail = ({ name, price, recipe, bundle}) => {
  return (
    <div class="infoCard">
      <h2>{name}</h2>
      <div class="infoContainer">
        <div class="prodInfo">
          <Item />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            eos ratione, excepturi mollitia beatae quisquam. Magnam assumenda
            reiciendis consequatur voluptas explicabo nisi, modi qui praesentium
            atque dolorem reprehenderit sint dolor sit illo ad eum repellendus
            nemo provident quaerat ut hic, ullam incidunt at! Minus ipsum
            tenetur distinctio aut, enim illum!
            <hr></hr>
            Precio: ${price}
          </p>
        </div>
        <div class="recipe text-center">
          <div class="buttonsRecipe text-center">
          <Link class="btn mainButton" to="/packs">
          &lt; VOLVER
            </Link>
            <button
              class="btn mainButton"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              RECETAS
            </button>
            <button class="btn mainButton">+ CARRITO</button>
          </div>
          <div class="collapse" id="collapseExample">
            <div class="expandedRecipe">
              <h2 class="text-center">TITULO</h2>
              <p>{recipe}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="w-100 mx-auto">
    //   <div className="card mx-auto col-md-3 col-10 mt-5">
    //     <img
    //       className="img-thumbnail mx-auto"
    //       src={img}
    //       width="300"
    //       height="300"
    //     />
    //     <div className="card-body text-center mx-auto">
    //       <div className="cvp">
    //         <h5 className="card-title font-weight-bold h1">{name}</h5>
    //         <p className="card-text h2">${price}</p>
    //         <p className="card-text h3">= RECETA =</p>
    //         <p href="#" className="text-center">
    //           {recipe}
    //         </p>
    //         <br />
    //         <a href="#" className="btn btn-primary cart px-auto">
    //           Añadir al carrito
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ItemDetail;
