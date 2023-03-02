import "./navbar.css";
import CartWidget from "../CartWidget";

function NavBar(){
    return (
    <div className="navbar">
        <span>WfxGroup</span>
        <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contacto</a></li>
            <CartWidget />
        </ul>
    </div>
    );
}

export default NavBar;