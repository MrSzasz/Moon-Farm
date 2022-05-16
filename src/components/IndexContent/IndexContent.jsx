import { Link } from "react-router-dom"
import "./IndexContent.scss"

const IndexContent = () => {
  return (
    <div className="indexContainer">
    <div className="mainImg"></div>
    <h1 className="text-center"> QUIENES SOMOS </h1>
    <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis nesciunt quia, quisquam fuga
        explicabo autem pariatur tempora nemo aspernatur assumenda natus atque inventore soluta culpa? Velit
        praesentium sint odio non at sunt magni nisi, quas et quibusdam voluptatibus ipsum vero aperiam ut
        temporibus. Voluptatum soluta assumenda ut illo eius recusandae sunt nulla eum architecto, quibusdam
        veritatis autem? Doloremque, beatae reprehenderit harum dolorum perferendis dolores ipsum debitis unde
        ipsa.
        Unde nobis iusto vitae, quasi architecto minus tenetur iste cupiditate! Perspiciatis accusantium cumque
        nisi
        itaque, commodi fugit voluptatem provident dolor blanditiis tenetur sapiente, harum eum vel iure.
        Facilis
        distinctio ipsam laboriosam libero.
    </p>
        <Link className="btn mainButton" to="/tienda">TIENDA &gt; </Link>
</div>
  )
}

export default IndexContent