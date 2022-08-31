import React from "react";
import clientsData from "../datas/PartenairesData";

function Clients() {
  return (
    <section className="flex flex-col align-center justify-center clients_container">
      <h1>Ils nous font confiance</h1>
      {clientsData.map((client) => (
        <div className="flex flex-col align-center justify-center">
          <h2>{client.title}</h2>
          <a href={client.links}>
            <img
              src={client.image}
              alt={client.alt}
              className="clients_image"
            />
          </a>
          <p>{client.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Clients;
