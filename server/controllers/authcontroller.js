const db = require("../config/db");

exports.createUser = async (req, res) => {
  const { firebase_uid, email } = req.body;

  try {
    await db.query("INSERT INTO users (firebase_uid, email) VALUES (?, ?)", [
      firebase_uid,
      email,
    ]);

    res.status(201).json({
      message: "User created",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
