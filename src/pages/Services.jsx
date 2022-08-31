import React from "react";
import servicesData from "../datas/ServicesData";

function Services() {
  return (
    <div>
      {servicesData.map((service) => (
        <div className="flex flex-col align-center services_container">
          <h2>{service.title}</h2>
          <img src={service.img} alt="" className="services_img" />
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Services;
