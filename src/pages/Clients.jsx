import React, { useEffect } from "react";
import clientsData from "../datas/PartenairesData";

function Clients() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="flex flex-col align-center justify-center clients_container">
      <h2>Ils nous font confiance</h2>
      {clientsData.map((client) => (
        <div className="flex flex-col align-center justify-center">
          <a href={client.links}>
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
    </section>
  );
}

export default Clients;
