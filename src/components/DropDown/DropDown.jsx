// =========================  LIBRARIES  =========================

import { Link } from "react-router-dom";

// =========================  CUSTOM IMPORTS  =========================

import { useNightContext } from "../../context/NightContext/NightContext";



const DropDown = ({ showFn }) => {

    const { isNight } = useNightContext();


    // ========== RETURN  ========== //

    return (
        <div
            className={`dropDownNavBar ${isNight ? "dropDownNavBarNight" : ""
                }`}
        >
            <Link onClick={showFn} to="/tienda/primavera">
                PRIMAVERA
            </Link>
            <Link onClick={showFn} to="/tienda/verano">
                VERANO
            </Link>
            <Link onClick={showFn} to="/tienda/otoño">
                OTOÑO
            </Link>
            <Link onClick={showFn} to="/tienda/especiales">
                ESPECIALES
            </Link>
        </div>
    )
}

export default DropDown