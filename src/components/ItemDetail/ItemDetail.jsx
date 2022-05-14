import "./ItemDetail.scss"

const ItemDetail = ({ img, name, price, recipe }) => {
  return (
    <div className="w-100 mx-auto">
      <div className="card mx-auto col-md-3 col-10 mt-5">
        <img
          className="img-thumbnail mx-auto"
          src={img}
          width="300"
          height="300"
        />
        <div className="card-body text-center mx-auto">
          <div className="cvp">
            <h5 className="card-title font-weight-bold h1">{name}</h5>
            <p className="card-text h2">${price}</p>
            <p className="card-text h3">= RECETA =</p>
            <p href="#" className="text-center">
              {recipe}
            </p>
            <br />
            <a href="#" className="btn btn-primary cart px-auto">
              Añadir al carrito
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
