import { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("orders")) || [];

    setOrders(data);
  }, []);

  return (
    <div>
      <h1>My Orders</h1>

      {orders.map((order, index) => (
        <div key={index}>
          <h3>Order #{index + 1}</h3>

          <p>Total: ₹{order.total}</p>

          <p>Date: {new Date(order.orderDate).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default Orders;
