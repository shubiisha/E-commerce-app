import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <Navbar />

      <div
        style={{
          padding: "30px",
        }}
      >
        <h1>Shopping Cart</h1>

        <br />

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                style={{
                  border: "1px solid #ddd",
                  padding: "10px",
                  marginBottom: "10px",
                }}
              >
                <h3>{item.name}</h3>

                <p>₹{item.price}</p>

                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}

            <h2>Total: ₹{total}</h2>
          </>
        )}
        <Link to="/checkout">
          <button>Proceed to Checkout</button>
        </Link>
      </div>
    </>
  );
}

export default Cart;
