import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

import "../styles/Navbar.css";

function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="navbar">
      <h2>ShopEasy</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
