import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";
import Form from "../components/Form";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [rdv, setRdv] = useState(true);
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
      <section>
        <div className="flex justify-center margin1r0 ">
          <button
            type="button"
            className="button_style margin0r1r"
            onClick={() => setRdv(true)}
          >
            Prendre un rdv
          </button>
          <button
            type="button"
            className="button_style margin0r1r"
            onClick={() => setRdv(false)}
          >
            Envoyer un email
          </button>
        </div>
        {rdv ? (
          <iframe
            src="https://calendly.com/terry-grimoire/30min?month=2022-08"
            frameBorder="0"
            title="calendly terry grimoire"
            scrolling="no"
          />
        ) : (
          <Form />
        )}
      </section>
    </div>
  );
}

export default Contact;
