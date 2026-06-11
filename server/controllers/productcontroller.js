const db = require("../config/db");

// GET PRODUCTS
exports.getProducts = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM products");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ADD PRODUCT
exports.addProduct = async (req, res) => {
  try {
    const { name, price, image, description } = req.body;

    await db.query(
      "INSERT INTO products (name, price, image, description) VALUES (?, ?, ?, ?)",
      [name, price, image, description],
    );

    res.json({ message: "Product Added Successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE PRODUCT
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    await db.query("DELETE FROM products WHERE id = ?", [id]);

    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
