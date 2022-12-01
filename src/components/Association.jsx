import React, { useState } from "react";
import fleche from "../assets/fleche.png";

function Association() {
  const [moins, setMoins] = useState(false);
  const [plus, setPlus] = useState(false);
  return (
    <div>
      <section>
        <h4>ÉLIGIBILITÉ :</h4>
        <div>
          <h5>Conditions :</h5>
          <ul>
            <li>Domiciliée à La Réunion</li>
            <li>Moins de 10 salariés</li>
            <li>0 salarié ok</li>
            <li>Une demande par an</li>
          </ul>
        </div>
      </section>
      <section>
        <h4>DOCUMENTS À FOURNIR POUR LE DÉPÔT DE DOSSIER : </h4>
        <button
          type="button"
          className="button_kapNumerik2"
          onClick={() => setMoins(!moins)}
        >
          Association moins de 2 ans
          <img
            src={fleche}
            alt="fleche"
            className={moins ? "fleche valide" : "fleche"}
          />
        </button>
        {moins && (
          <ul>
            <li>Carte d’identité ou Passeport</li>
            <li>Un RIB </li>
            <li>Le devis du prestataire</li>
            <li>La fiche de plan d’actions</li>
            <li>La fiche d’engagement</li>
            <li>Avis situation du répertoire SIREN</li>
            <li>Statuts à jour et approuvés</li>
            <li>Déclaration en préfecture</li>
            <li>OU publication au Journal Officiel</li>
            <li>Décision CA en faveur du projet</li>
            <li>Liste des membres du CA</li>
            <li>Bilans et Comptes de résultat</li>
            <li>
              Attestation sur l’honneur indiquant que l’association a moins de
              deux ans et qu’elle respecte les conditions d’éligibilité du kap
              numérik.
            </li>
          </ul>
        )}
        <button
          type="button"
          className="button_kapNumerik2"
          onClick={() => setPlus(!plus)}
        >
          Association plus de 2 ans
          <img
            src={fleche}
            alt="fleche"
            className={plus ? "fleche valide" : "fleche"}
          />
        </button>
        {plus && (
          <ul>
            <li>Carte d’identité ou Passeport</li>
            <li>Un RIB </li>
            <li>Le devis du prestataire</li>
            <li>La fiche de plan d’actions</li>
            <li>La fiche d’engagement</li>
            <li>Avis situation du répertoire SIREN</li>
            <li>Statuts à jour et approuvés</li>
            <li>Déclaration en préfecture</li>
            <li>OU publication au Journal Officiel</li>
            <li>Décision CA en faveur du projet </li>
            <li>Liste des membres du CA</li>
            <li>Bilans et Comptes de résultat</li>
          </ul>
        )}
      </section>
    </div>
  );
}

export default Association;
