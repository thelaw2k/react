import "./navbar.css";
import CartWidget from "../CartWidget";

function NavBar({changeValue}){
    return (
    <div className="navbar">
        <span>WfxGroup</span>
        <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Ofertas</a></li>
            <li><a href="#">Contacto</a></li>
            <li><button onClick={changeValue}>Cambiar estado</button></li>
            <CartWidget />
        </ul>
    </div>
    );s
}

export default NavBar;