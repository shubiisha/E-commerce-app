const db = require("../config/db");

// GET ALL ORDERS (Admin)
exports.getAllOrders = async (req, res) => {
  try {
    const [orders] = await db.query("SELECT * FROM orders ORDER BY id DESC");

    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
