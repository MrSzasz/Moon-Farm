import "./Item.scss";

function Item({ className }) {
  return (
    
    <div className={`packCard ${className}`}>
      <div className="contentCard"></div>
      <div className="contentCard"></div>
      <div className="contentCard"></div>
      <div className="contentCard"></div>
      <div className="contentCard"></div>
    </div>


    // <Card className="glassCard" style={{ width: "18rem" }}>
    //   <Card.Img className="w-50 m-auto p-2" variant="top" src={image} />
    //   <hr></hr>
    //   <Card.Body>
    //     <Card.Title className="text-center">{product}</Card.Title>
    //     <Card.Text className="text-center">
    //       {`${product} - ID: ${id}`}
    //       <br></br>${price}
    //     </Card.Text>
    //     <Link to={`/detalle/${id}`}>
    //       <Button variant="primary" className="w-100">
    //         Detalles
    //       </Button>
    //     </Link>
    //   </Card.Body>
    // </Card>
  );
}

export default Item;
