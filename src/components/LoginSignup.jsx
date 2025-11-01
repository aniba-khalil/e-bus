import React from "react";
import { Link } from "react-router-dom";
import "../css/style.css";

export default function LoginSignup() {
  return (
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />

      <div className="signup">
        <form method="post">
          <label htmlFor="chk" aria-hidden="true">Se connecter</label>
          <input type="text" id="login_user" name="user" placeholder="Email ou numéro" required />
          <input type="password" id="login_pswd" name="pswd" placeholder="Mot de passe" required />
          <button type="submit" name="login">Se connecter</button>
          
          {/* 🔗 Lien React vers la page Consulter */}
          <Link to="/consulter">
            <p>Consulter les horaires des bus</p>
          </Link>
        </form>
      </div>

      {/* Formulaire d'inscription */}
      <div className="login">
        <form method="post">
          <label htmlFor="chk" aria-hidden="true">Créer compte</label>
          <input type="text" id="namec" name="namec" placeholder="Nom complet" required />
          <input type="text" id="reg_user" name="user" placeholder="Email" required />
          <input type="text" id="reg_tel" name="tel" placeholder="Numéro téléphone" required />
          <input
            type="password"
            id="reg_pswd"
            name="pswd"
            placeholder="Mot de passe"
            required
            pattern="^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$"
            title="Mot de passe trop faible : minimum 8 caractères, au moins une lettre et un chiffre."
          />
          <button type="submit" name="signup">Créer le compte</button>
        </form>
      </div>
    </div>
  );
}
