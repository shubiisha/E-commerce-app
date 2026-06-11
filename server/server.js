const express = require("express");
const cors = require("cors");
const db = require("./config/db");

const app = express();
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");

app.use("/api/orders", orderRoutes);

app.use("/api/products", productRoutes);

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT NOW() AS time");

    res.json({
      message: "Backend Running",
      mysql: "Connected",
      serverTime: rows[0].time,
    });
  } catch (error) {
    res.status(500).json({
      mysql: "Not Connected",
      error: error.message,
    });
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
