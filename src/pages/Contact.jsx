import React, { useState } from "react";
import Form from "../components/Form";

function Contact() {
  const [rdv, setRdv] = useState(true);
  return (
    <div className="flex flex-col align-center">
      <h2>Nous joindre</h2>
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
          />
        ) : (
          <Form />
        )}
      </section>
    </div>
  );
}

export default Contact;
