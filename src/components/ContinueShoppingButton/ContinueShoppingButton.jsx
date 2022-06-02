import "./ContinueShoppingButton.scss"
import { Link, useParams } from "react-router-dom";
import { useNightContext } from "../../context/NightContext/NightContext";

const ContinueShoppingButton = () => {
  const { seasonUrl } = useParams();
const {isNight} = useNightContext();

  return (
    <div className="d-flex justify-content-around p-3">
      <Link to={`/tienda/${seasonUrl}`} className={`btn mainButton ${isNight && 'mainButtonNight'}`}>
      &lt; SEGUIR COMPRANDO
      </Link>
      <Link to="/carrito" className={`btn mainButton ${isNight && 'mainButtonNight'}`}>
        CARRITO &gt;
      </Link>
    </div>
  );
};

export default ContinueShoppingButton;
