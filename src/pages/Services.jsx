import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import formulesData from "../datas/FormulesData";

function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="margin0r1r services">
      <Helmet>
        <title> Grimoire Numérique | Nos offres </title>
        <link rel="canonical" href="https://grimoire-numerique.re/Services" />
        <meta
          name="description"
          content="Retrouvez toutes nos offres à partir de 120.00 € avec le remboursement du kap numérik de La Région Réunion."
        />
      </Helmet>
      <h1 className="h1">Nos offres</h1>
      <p>
        En ce moment, La Région Réunion vous rembourse 80% du prix hors taxes
        grâce au dispositif
        <Link to="/Blog/2">Kap Numérik.</Link>
      </p>
      <div className="service_main_container">
        {formulesData.map((formule) => (
          <div className="formules_container flex-col text-center margin5r0">
            <h3 className={`h3_formule ${formule.bg}`}>{formule.title}</h3>
            <strong>{formule.price}</strong>
            <small>{formule.description.autre}</small>
            {!formule.secondPrice && (
              <p>
                Paiement initial de <strong>300.00 €</strong> à régler avant la
                confection du site. Formule éligible uniquement pour sites
                vitrines.
              </p>
            )}
            <div>
              <table>
                <tbody>
                  <tr>
                    <th>Nombres de pages</th>
                    <td>{formule.description.pages}</td>
                  </tr>
                  <tr>
                    <th>Maquette</th>
                    <td>{formule.description.maquette}</td>
                  </tr>
                  <tr>
                    <th>Personnalisation</th>
                    <td>{formule.description.personalisation}</td>
                  </tr>
                  <tr>
                    <th>Version web</th>
                    <td>{formule.description.web}</td>
                  </tr>
                  <tr>
                    <th>Version mobile</th>
                    <td>{formule.description.mobile}</td>
                  </tr>
                  <tr>
                    <th>Éligible kap numérik</th>
                    <td>{formule.description.remboursement}</td>
                  </tr>
                  <tr>
                    <th>Montage du dossier kap numérik</th>
                    <td>{formule.description.accompagnement}</td>
                  </tr>
                  <tr>
                    <th>Listé sur nos sites partenaires</th>
                    <td>{formule.description.partenaires}</td>
                  </tr>
                  <tr>
                    <th>Contenu fourni</th>
                    <td>{formule.description.contenu}</td>
                  </tr>
                  <tr>
                    <th>Stratégie digitale</th>
                    <td>{formule.description.stratégies}</td>
                  </tr>
                  <tr>
                    <th>Marketing digital</th>
                    <td>{formule.description.reseaux}</td>
                  </tr>
                  <tr>
                    <th>Conseils entreprise</th>
                    <td>{formule.description.conseils}</td>
                  </tr>
                  <tr>
                    <th>Changement du contenu</th>
                    <td>{formule.description.changement}</td>
                  </tr>
                  <tr>
                    <th>Hébergement</th>
                    <td>{formule.description.hebergement}</td>
                  </tr>
                </tbody>
              </table>
              <Link to="/contact">
                <button type="button" className="button_style white">
                  Prendre RDV
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
