import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, clearCart } = useCart();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const total = cart.reduce((sum, item) => sum + Number(item.price || 0), 0);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePlaceOrder = () => {
    if (
      !formData.fullName ||
      !formData.phone ||
      !formData.address ||
      !formData.city ||
      !formData.pincode
    ) {
      alert("Please fill all fields");
      return;
    }

    if (cart.length === 0) {
      alert("Your cart is empty");
      return;
    }

    const order = {
      customer: formData,
      items: cart,
      total,
      orderDate: new Date().toISOString(),
      status: "Pending",
    };

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

    existingOrders.push(order);

    localStorage.setItem("orders", JSON.stringify(existingOrders));

    clearCart();

    alert("Order Placed Successfully!");

    setFormData({
      fullName: "",
      phone: "",
      address: "",
      city: "",
      pincode: "",
    });
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "30px auto",
        padding: "20px",
      }}
    >
      <h1>Checkout</h1>

      <h2>Shipping Details</h2>

      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
        }}
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
        }}
      />

      <textarea
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
        }}
      />

      <input
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
        }}
      />

      <input
        type="text"
        name="pincode"
        placeholder="Pincode"
        value={formData.pincode}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
        }}
      />

      <h2>Order Summary</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item, index) => (
          <div
            key={index}
            style={{
              borderBottom: "1px solid #ddd",
              padding: "10px 0",
            }}
          >
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>
          </div>
        ))
      )}

      <h2>Total: ₹{total}</h2>

      <button
        onClick={handlePlaceOrder}
        style={{
          padding: "12px 20px",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
