const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "2006",
  database: "ecommerce_db",
  waitForConnections: true,
  connectionLimit: 10,
});

module.exports = db;
