import React from "react";
import { useNavigate } from "react-router-dom";
import "./OnlineService.css";
const OnlineService = ({ onlineService }) => {
  const { img, name, price, about } = onlineService;
  const navigate = useNavigate();
  const serviceDetails = () => {
    navigate("/serviceDetails");
  };
  return (
    <div className="online-container mt-2">
      <img src={img} alt="" />
      <h1>name :{name}</h1>
      <p> price:{price}</p>
      <p>{about}</p>
      <button onClick={serviceDetails} className="bg-primary">
        book now
      </button>
    </div>
  );
};

export default OnlineService;
