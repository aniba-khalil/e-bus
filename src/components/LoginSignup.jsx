import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/style.css";

export default function LoginSignup() {
  const navigate = useNavigate();

  // États de connexion
  const [loginUser, setLoginUser] = useState("");
  const [loginPswd, setLoginPswd] = useState("");
  const [error, setError] = useState("");

  // États d’inscription
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [pswd, setPswd] = useState("");
  const [signupMsg, setSignupMsg] = useState("");

  // 🔹 Connexion
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: loginUser, pswd: loginPswd }),
    });

    const data = await response.json();

    if (data.success) {
      navigate("/dashboard"); // ✅ Redirige vers le tableau de bord
    } else {
      setError("Email ou mot de passe incorrect !");
    }
  };

  // 🔹 Inscription
  const handleSignup = async (e) => {
    e.preventDefault();
    setSignupMsg("");

    const response = await fetch("http://localhost:5000/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        tel: tel,
        pswd: pswd,
      }),
    });

    const data = await response.json();

    if (data.success) {
      setSignupMsg("✅ Compte créé avec succès !");
    } else {
      setSignupMsg("❌ " + data.message);
    }
  };

  return (
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />

      {/* 🔹 Connexion */}
      <div className="signup">
        <form onSubmit={handleLogin}>
          <label htmlFor="chk" aria-hidden="true">
            Se connecter
          </label>

          <input
            type="text"
            id="login_user"
            placeholder="Email ou numéro"
            value={loginUser}
            onChange={(e) => setLoginUser(e.target.value)}
            required
          />

          <input
            type="password"
            id="login_pswd"
            placeholder="Mot de passe"
            value={loginPswd}
            onChange={(e) => setLoginPswd(e.target.value)}
            required
          />

          <button type="submit">Se connecter</button>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <Link to="/consulter">
            <p>Consulter les horaires des bus</p>
          </Link>
        </form>
      </div>

      {/* 🔹 Inscription */}
      <div className="login">
        <form onSubmit={handleSignup}>
          <label htmlFor="chk" aria-hidden="true">
            Créer compte
          </label>

          <input
            type="text"
            placeholder="Nom complet"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Numéro téléphone"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={pswd}
            onChange={(e) => setPswd(e.target.value)}
            required
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
            title="Mot de passe trop faible : minimum 8 caractères, au moins une lettre et un chiffre."
          />
          <button type="submit">Créer le compte</button>

          {signupMsg && <p style={{ color: "green" }}>{signupMsg}</p>}
        </form>
      </div>
    </div>
  );
}
