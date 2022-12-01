import React, { useState } from "react";
import fleche from "../assets/fleche.png";

function Montant() {
  const [remb, setRemb] = useState(false);
  return (
    <section>
      <div>
        <button
          type="button"
          onClick={() => setRemb(!remb)}
          className="button_kapNumerik2"
        >
          Plafonds de remboursement
          <img
            src={fleche}
            alt="fleche noire"
            className={remb ? "fleche valide" : "fleche"}
          />
        </button>
        {remb && (
          <ul>
            <li>
              Création ou refonte d’un site vitrine :<span> 1200 €</span>
            </li>
            <li>
              Création d’un site marchand (vente en ligne) :<span> 2000 €</span>
            </li>
            <li>
              Création de contenus digitaux (crédits photos, web design, logo,
              charte graphique, etc) : <span> 2000 €</span>
            </li>
            <li>
              Création de stratégies digitales : <span> 500 €</span>
            </li>
            <li>
              Community management :<span> 1000 €</span>
            </li>
            <li>
              Création et développement d’une application mobile :
              <span> 2000 €</span>
            </li>
            <li>
              Création d’un Chat Bot (robot de discussion) :<span> 2000 €</span>
            </li>
            <li>
              Prestations de sécurité (audits, sécurisation du site,
              sécurisation de données, etc) : <span>1000 €</span>
            </li>
            <li>
              Abonnement à une plateforme pour vendre ses produits en ligne (ex:
              cDiscount) : <span>1000 €</span>
            </li>
          </ul>
        )}
      </div>
    </section>
  );
}

export default Montant;
