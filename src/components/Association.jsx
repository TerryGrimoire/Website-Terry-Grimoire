import React, { useState } from "react";
import fleche from "../assets/fleche.png";

function Association() {
  const [moins, setMoins] = useState(false);
  const [plus, setPlus] = useState(false);
  return (
    <div>
      <section>
        <h4>ÉLIGIBILITÉ :</h4>
        <p>Testez votre éligibilité au kap numérik avec notre simulateur.</p>
        <div>
          <h5>Conditions :</h5>
          <ul>
            <li>Domiciliée à La Réunion</li>
            <li>Moins de 10 salariés</li>
            <li>0 salarié ok</li>
            <li>Une demande par année calendaire</li>
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
          Association de moins de 2 ans
          <img
            src={fleche}
            alt="fleche"
            className={moins ? "fleche valide" : "fleche"}
          />
        </button>
        {moins && (
          <ul>
            <li>Carte d’identité ou Passeport</li>
            <li>Un RIB (Relevé d’identité bancaire)</li>
            <li>Le devis du prestataire</li>
            <li>La fiche de plan d’actions numériques</li>
            <li>La fiche d’engagement</li>
            <li>Avis de situation du répertoire SIREN</li>
            <li>Copie des statuts à jour et approuvés</li>
            <li>Récépissé déclaration en préfecture</li>
            <li>OU publication au Journal Officiel</li>
            <li>Décision du CA en faveur du projet</li>
            <li>Liste des membres du CA</li>
            <li>Dernier bilans et Comptes de résultat</li>
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
          Entreprise de plus de 2 ans
          <img
            src={fleche}
            alt="fleche"
            className={plus ? "fleche valide" : "fleche"}
          />
        </button>
        {plus && (
          <ul>
            <li>Carte d’identité ou Passeport</li>
            <li>Un RIB (Relevé d’identité bancaire)</li>
            <li>Le devis du prestataire</li>
            <li>La fiche de plan d’actions numériques</li>
            <li>La fiche d’engagement</li>
            <li>Avis de situation du répertoire SIREN</li>
            <li>Copie des statuts à jour et approuvés</li>
            <li>Récépissé déclaration en préfecture</li>
            <li>OU publication au Journal Officiel</li>
            <li>Décision du CA en faveur du projet </li>
            <li>Liste des membres du CA</li>
            <li>Dernier bilans et Comptes de résultat</li>
          </ul>
        )}
      </section>
    </div>
  );
}

export default Association;
