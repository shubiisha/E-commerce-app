const db = require("../config/db");

exports.syncUser = async (req, res) => {
  const { uid, email, name } = req.user;

  const [rows] = await db.query("SELECT * FROM users WHERE firebase_uid = ?", [
    uid,
  ]);

  if (rows.length === 0) {
    await db.query(
      "INSERT INTO users (firebase_uid, email, name) VALUES (?, ?, ?)",
      [uid, email, name || ""],
    );
  }

  res.json({ message: "User synced" });
};
