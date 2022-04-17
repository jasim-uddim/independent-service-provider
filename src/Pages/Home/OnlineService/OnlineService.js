import React from "react";
import "./OnlineService.css";
const OnlineService = ({ onlineService }) => {
  const { img, name, price, about } = onlineService;
  return (
    <div className="online-container mt-2">
      <img src={img} alt="" />
      <h1>name :{name}</h1>
      <p> price:{price}</p>
      <p>{about}</p>
      <button className="bg-primary">book now</button>
    </div>
  );
};

export default OnlineService;
