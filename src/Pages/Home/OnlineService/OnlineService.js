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
    <div class="card col-sm-12 col-md-6 col-lg-4" style={{ width: "24rem" }}>
      <img src={img} class="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">price:${price}</p>
        <p className="card-text">{about}</p>
        <div className="text-center">
          <button
            onClick={serviceDetails}
            className="bg-primary border-0 rounded text-white"
          >
            book now
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnlineService;
