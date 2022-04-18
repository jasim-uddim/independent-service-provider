import React, { useEffect, useState } from "react";
import Banner from "../../Banner/Banner";
import ExtraPage from "../../ExtraPage/ExtraPage";
import Service from "../Service/Service";

const Home = () => {
  const [services, setServices] = useState([]);
  const [serviceData, onlineData, groupsData] = services;

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <Banner></Banner>
      <div className="container">
        <section id="services">
          <h1 className="text-center text-primary mt-2">Personal service</h1>
          <div className="row mx-0">
            {serviceData?.map((service) => (
              <Service key={service.id} service={service} />
            ))}
          </div>
        </section>
        <section id="online">
          <h1 className="text-center text-primary mt-2">Online service</h1>
          <div className="row mx-0">
            {onlineData?.map((service) => (
              <Service key={service.id} service={service} />
            ))}
          </div>
        </section>
        <section id="group">
          <h1 className="text-center text-primary mt-2">Group service</h1>
          <div className="row mx-0">
            {groupsData?.map((service) => (
              <Service key={service.id} service={service} />
            ))}
          </div>
        </section>
      </div>
      <ExtraPage></ExtraPage>
    </div>
  );
};

export default Home;
