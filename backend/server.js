const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

// 🔹 Connexion à MySQL
const db = mysql.createConnection({
  host: "192.168.43.39",
  user: "admin",
  password: "99451125",
  database: "bus",
  port : 3306

});

db.connect((err) => {
  if (err) console.error("❌ Erreur de connexion DB:", err);
  else console.log("✅ Connecté à MySQL");
});

// 🔹 Route de connexion (login)
app.post("/api/login", (req, res) => {
  const { user, pswd } = req.body;

  const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
  db.query(sql, [user, pswd], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: "Erreur serveur" });
    }

    if (results.length > 0) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  });
});

// 🔹 Route de création de compte (signup)
app.post("/api/signup", (req, res) => {
  const { name, email, tel, pswd } = req.body;

  // Vérifier si l'email existe déjà
  const checkSql = "SELECT * FROM users WHERE email = ?";
  db.query(checkSql, [email], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: "Erreur serveur" });
    }

    if (results.length > 0) {
      return res.json({ success: false, message: "Cet email est déjà utilisé." });
    }

    // Insérer le nouvel utilisateur
    const insertSql = "INSERT INTO users (name, email, phone, password) VALUES (?, ?, ?, ?)";
    db.query(insertSql, [name, email, tel, pswd], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ success: false, message: "Erreur lors de la création du compte." });
      }

      res.json({ success: true });
    });
  });
});

// 🔹 Lancer le serveur
app.listen(5000, () => console.log("🚀 Serveur backend sur http://localhost:5000"));
