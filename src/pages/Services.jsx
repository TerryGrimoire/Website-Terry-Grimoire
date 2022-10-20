import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import formulesData from "../datas/FormulesData";

function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="margin0r1r">
      <h1 className="h1">Nos offres</h1>
      {formulesData.map((formule) => (
        <div className="formules_container margin0r1r flex-col text-center">
          <h3 className="h3_formule">{formule.title}</h3>
          <strong>{formule.price} *</strong>
          <small>{formule.description.autre}</small>
          {formule.secondPrice ? (
            <p>
              * Cela revient à <strong>{formule.secondPrice} </strong> avec
              <a
                className="lien"
                href="https://regionreunion.com/aides-services/article/le-cheque-numerique"
              >
                le chèque numérique.
              </a>
            </p>
          ) : (
            "Cette formule n'est pas éligible au chèque numérique."
          )}
          <div>
            <table>
              <tbody>
                <tr>
                  <th>Maquette</th>
                  <td>{formule.description.maquette}</td>
                </tr>
                <tr>
                  <th>Personnalisation</th>
                  <td>{formule.description.personalisation}</td>
                </tr>
                <tr>
                  <th>Nombres de pages</th>
                  <td>{formule.description.pages}</td>
                </tr>
                <tr>
                  <th>Contenu fourni</th>
                  <td>{formule.description.contenu}</td>
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
                  <th>Nom de domaine</th>
                  <td>{formule.description.domaine}</td>
                </tr>
                <tr>
                  <th>Hébergement</th>
                  <td>{formule.description.hebergement}</td>
                </tr>
                <tr>
                  <th>Éligible chèque numérique</th>
                  <td>{formule.description.remboursement}</td>
                </tr>
                <tr>
                  <th>Marketing digital</th>
                  <td>{formule.description.reseaux}</td>
                </tr>
                <tr>
                  <th>Formulaire de contact</th>
                  <td>{formule.description.contact}</td>
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
    </section>
  );
}

export default Services;
