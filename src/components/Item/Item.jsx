import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Item.scss"  

function Item({ id, product, image, price }) {
  return (
    <Card className="glassCard" style={{ width: "18rem" }}>
      <Card.Img className="w-50 m-auto p-2" variant="top" src={image} />
      <hr></hr>
      <Card.Body>
        <Card.Title className="text-center">{product}</Card.Title>
        <Card.Text className="text-center">
          {`${product} - ID: ${id}`}
          <br></br>${price}
        </Card.Text>
        <Button variant="primary" className="w-100">
          Detalles
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Item;
