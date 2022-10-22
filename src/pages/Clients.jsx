import React, { useEffect } from "react";
import Helmet from "react-helmet";
import clientsData from "../datas/PartenairesData";

function Clients() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="flex flex-col align-center justify-center clients_container">
      <Helmet>
        <title> Grimoire Numérique | Nos clients </title>
        <link rel="canonical" href="https://grimoire-numerique.re/Clients" />
        <meta
          name="description"
          content="Nos clients sont notre principale prioritée et nous faisons tout pour les satisfaire de notre mieux. Faites nous confiance et lancez vous dès maintenant dans la transition numérique."
        />
      </Helmet>
      <h1>Ils nous font confiance</h1>

      <div className="clients_main_container">
        {clientsData.map((client) => (
          <div className="flex flex-col align-center justify-center">
            <a href={client.links} target="_blank" rel="noreferrer">
              <img
                src={client.image}
                alt={client.alt}
                className="clients_image"
              />
            </a>
            <h3>{client.title}</h3>
            <p className="p_home">{client.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Clients;
