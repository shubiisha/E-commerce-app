import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

import "../styles/Products.css";

function Products() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 2999,
      image: "https://via.placeholder.com/250",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 4999,
      image: "https://via.placeholder.com/250",
    },
    {
      id: 3,
      name: "Gaming Mouse",
      price: 1499,
      image: "https://via.placeholder.com/250",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="products-page">
        <h1 className="products-title">Our Products</h1>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
