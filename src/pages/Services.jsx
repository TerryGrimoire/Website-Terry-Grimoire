import React, { useEffect } from "react";
import servicesData from "../datas/ServicesData";

function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      {servicesData.map((service) => (
        <div className="flex flex-col align-center services_container">
          <h2>{service.title}</h2>
          <img src={service.img} alt="" className="services_img" />
          <p className="p_home">{service.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Services;
