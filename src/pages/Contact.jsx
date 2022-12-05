import React, { useEffect } from "react";
import Helmet from "react-helmet";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col align-center contact_container">
      <Helmet>
        <title> Grimoire Numérique | Contact </title>
        <meta
          name="description"
          content="Contactez nous par email, téléphone ou en prenant RDV directement via notre agenda en ligne."
        />
      </Helmet>
      <h1 className="h1">Nous joindre</h1>
      <section className="contact">
        <div className="coord">
          <h2>Mes coordonnées</h2>
          <div className="flex-col">
            <a href="tel:+262693873050">📞 06 93 87 30 50</a>
            <a href="mailto:contact@grimoire-numerique.re">
              📧 contact@grimoire-numerique.re
            </a>
            <a href="https://www.facebook.com/grimoirenumerique">
              <img src="" alt="" />
            </a>
          </div>
        </div>

        <iframe
          src="https://calendly.com/terry-grimoire/30min?month=2022-08"
          frameBorder="0"
          title="calendly terry grimoire"
          scrolling="no"
        />
      </section>
    </div>
  );
}

export default Contact;
