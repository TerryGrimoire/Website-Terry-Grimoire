import React from "react";

function Form() {
  return (
    <form action="form">
      <form action="form" className="flex flex-col contact_form">
        <label htmlFor="nameInput">
          Name
          <input
            type="text"
            placeholder="Saisir votre nom et prénom"
            name="nameInput"
          />
        </label>
        <label htmlFor="emailInput">
          Email
          <input
            type="email"
            placeholder="Saisir votre adresse email"
            name="emailInput"
          />
        </label>
        <label htmlFor="phoneInput">
          Number Phone
          <input
            type="tel"
            placeholder="Saisir votre numéro de téléphone"
            name="phoneInput"
          />
        </label>
        <label htmlFor="messageInput">
          Votre message
          <textarea
            type="text"
            name="sujetlInput"
            placeholder="Bonjour Grimoire, 
            Abracadra."
          />
        </label>
        <button type="submit" value="send" className="button_style blue">
          Envoyer
        </button>
      </form>
    </form>
  );
}

export default Form;
