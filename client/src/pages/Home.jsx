import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/Home.css";
import "../styles/Footer.css";

function Home() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <h1>Welcome To ShopEasy</h1>

        <p>Discover amazing products at the best prices.</p>

        <button>Shop Now</button>
      </section>

      <Footer />
    </>
  );
}

export default Home;
