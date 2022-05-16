import { Link, useParams } from "react-router-dom";
import Item from "../Item/Item";
import "./ItemDetail.scss";

const ItemDetail = ({ name, price, recipe, bundle}) => {
  const {seasonUrl} = useParams()
  const { packDetail } = useParams();
  console.log(packDetail)


  return (
    <div className="infoCard">
      <h2 className="text-uppercase">{packDetail}</h2>
      <div className="infoContainer">
        <div className="prodInfo">
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
        <div className="recipe text-center">
          <div className="buttonsRecipe text-center">
          <Link className="btn mainButton" to={`/tienda/${seasonUrl}`}>
          &lt; VOLVER
            </Link>
            <button
              className="btn mainButton"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              RECETAS
            </button>
            <button className="btn mainButton">+ CARRITO</button>
          </div>
          <div className="collapse" id="collapseExample">
            <div className="expandedRecipe">
              <h2 className="text-center">TITULO</h2>
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
