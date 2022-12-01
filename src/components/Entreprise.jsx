import React, { useState } from "react";
import { Link } from "react-router-dom";
import fleche from "../assets/fleche.png";

function Entreprise() {
  const [moins, setMoins] = useState(false);
  const [plus, setPlus] = useState(false);
  return (
    <div className="container">
      <section>
        <h4>ÉLIGIBILITÉ :</h4>
        <p>
          Testez votre éligibilité au kap numérik avec
          <Link to="/simulateur" className="lien">
            notre simulateur
          </Link>
          .
        </p>
        <div>
          <h5>Conditions :</h5>
          <ul>
            <li>Siège social à La Réunion </li>
            <li>Moins de 20 salariés</li>
            <li>0 salarié ok</li>
            <li>Une demande par année calendaire</li>

            <li>Inscrit au Registre des Commerces</li>
            <li>OU Registre des Métiers</li>
          </ul>
        </div>
        <div>
          <h5>secteurs exclus :</h5>
          <ul>
            <li>Entreprises du numérique</li>
            <li>Secteur agricole</li>
            <li>La pêche</li>
          </ul>
        </div>

        <div>
          <h5>Chiffre d'affaire :</h5>

          <ul>
            <li>De 0 à 9 salariés : CA &lt; à 500 000 €</li>
            <li>De 10 à 19 salariés : CA &lt; à 1 M €</li>
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
          Entreprise de moins de 2 ans
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
            <li>KBIS ou Extrait D1 moins de 3 mois</li>
            <li>
              Attestation sur l’honneur indiquant que l’entreprise a moins de
              deux ans et qu’elle respecte les conditions d’éligibilité du kap
              numérik
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
            <li>KBIS ou Extrait D1 moins de 3 mois</li>
            <li>Bilans et comptes de résultats du dernier exercice clos</li>
            <li>Déclaration sociale nominative N-1</li>
          </ul>
        )}
      </section>
    </div>
  );
}

export default Entreprise;
