exports.getCart = async (req, res) => {
  const userId = req.params.userId;

  const [rows] = await db.query("SELECT * FROM cart WHERE user_id=?", [userId]);

  res.json(rows);
};
