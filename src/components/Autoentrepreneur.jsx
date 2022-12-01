import React, { useState } from "react";
import { Link } from "react-router-dom";
import fleche from "../assets/fleche.png";

function Autoentrepreneur() {
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
            <li>Domicilié à La Réunion </li>
            <li>Une demande par an</li>
            <li>Chiffre d'affaire inférieur à 500 K €</li>
            <li>
              Si libéral, la profession doit être non réglementées ou assimilées
            </li>
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
          AutoEntrepreneur
          <img
            src={fleche}
            alt="fleche"
            className={moins ? "fleche valide" : "fleche"}
          />
        </button>
        {moins && (
          <ul>
            <li>Carte d’identité ou Passeport</li>
            <li>Un RIB</li>
            <li>Le devis du prestataire</li>
            <li>La fiche de plan d’actions</li>
            <li>La fiche d’engagement</li>
            <li>KBIS ou Extrait D1 </li>
            <li>Dernier avis d'imposition</li>
            <li>OU tableau récapitulatif des recettes</li>
          </ul>
        )}
        <button
          type="button"
          className="button_kapNumerik2"
          onClick={() => setPlus(!plus)}
        >
          Professions Libérales
          <img
            src={fleche}
            alt="fleche"
            className={plus ? "fleche valide" : "fleche"}
          />
        </button>
        {plus && (
          <ul>
            <li>Carte d’identité ou Passeport</li>
            <li>Un RIB</li>
            <li>Le devis du prestataire</li>
            <li>La fiche de plan d’actions</li>
            <li>La fiche d’engagement</li>
            <li>Avis situation du répertoire SIREN</li>
            <li>Attestation URSSAF</li>
            <li>OU dernier avis d’imposition </li>
            <li>Copie du mémento fiscal</li>
            <li>Si société, KBIS moins de 3 mois</li>
          </ul>
        )}
      </section>
    </div>
  );
}

export default Autoentrepreneur;
