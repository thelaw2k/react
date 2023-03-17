import "./navbar.css";
import CartWidget from "../CartWidget";
import { NavLink } from "react-router-dom";

function NavBar({changeValue}){
    return (
    <div className="navbar">
        <span><NavLink to="/">Logo</NavLink></span>
        <ul>
            <li><NavLink to="/category/quimicos">Quimicos</NavLink></li>
            <li><NavLink to="/category/selladores">Selladores</NavLink></li>
            <CartWidget />
        </ul>
    </div>
    );s
}

export default NavBar;