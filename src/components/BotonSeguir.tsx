import { useState } from "react";
import './BotonSeguir.css';

function BotonSeguir() {
    const [siguiendo, setSiguiendo] = useState(false);

    function handleClick() {
        console.log("Siguiendo vale: " + siguiendo)
        setSiguiendo(true);
        console.log("Siguiendo vale: " + siguiendo)
    }

    return (<button className={siguiendo ? "boton-seguir boton-seguir-siguiendo" : "boton-seguir"} onClick={handleClick}>{ siguiendo ? "Siguiendo" : "Seguir"}</button>);
}

export default BotonSeguir;