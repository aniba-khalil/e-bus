import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/styled.css";

export default function Consulter() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center">
      <div className="glass-card w-11/12 md:w-3/4 lg:w-2/3 p-8 rounded-2xl shadow-2xl border border-white/20">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Consulter les bus 🚌
        </h1>

        {/* Gouvernorat */}
        <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-4">
          <h3 className="text-xl font-semibold">Gouvernorat</h3>
          <select
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option>Bizerte</option>
          </select>
        </div>

        {/* Ville */}
        <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
          <h3 className="text-xl font-semibold">Ville</h3>
          <select
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option>Mateur</option>
          </select>
        </div>

        {/* Tableau */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-white/5">
              <tr>
                <th className="p-4">N° bus</th>
                <th className="p-4">Point départ</th>
                <th className="p-4">Point d’arrivée</th>
                <th className="p-4">Heure départ</th>
                <th className="p-4">Heure d’arrivée</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-white/10">
                <td className="p-4">5555555555</td>
                <td className="p-4">Bizerte</td>
                <td className="p-4">Tunis</td>
                <td className="p-4">08:00</td>
                <td className="p-4">10:00</td>
              </tr>
              <tr className="hover:bg-white/10">
                <td className="p-4">8888888888</td>
                <td className="p-4">Mateur</td>
                <td className="p-4">Bizerte</td>
                <td className="p-4">09:00</td>
                <td className="p-4">11:00</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Bouton retour */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 btn-primary rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105"
          >
            ⬅ Retour à la connexion
          </button>
        </div>
      </div>
    </div>
  );
}
