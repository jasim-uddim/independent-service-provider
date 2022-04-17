import React, { useEffect, useState } from "react";
import OnlineService from "../OnlineService/OnlineService";
import "./OnlineServices.css";
const OnlineServices = () => {
  const [onlineServices, setOnlineServices] = useState([]);
  useEffect(() => {
    fetch("online.json")
      .then((res) => res.json())
      .then((data) => setOnlineServices(data));
  }, []);

  return (
    <div id="online">
      <h1 className="text-center my-2 text-primary">Online service</h1>
      <div className="online-service">
        {onlineServices.map((onlineService) => (
          <OnlineService
            key={onlineService.id}
            onlineService={onlineService}
          ></OnlineService>
        ))}
      </div>
    </div>
  );
};

export default OnlineServices;
