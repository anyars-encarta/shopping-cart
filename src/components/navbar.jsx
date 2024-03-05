import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (<nav>
        <h1>Shopping Cart</h1>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/cart">Cart</NavLink>
            </li>
        </ul>
    </nav>)
};

export default Navbar;