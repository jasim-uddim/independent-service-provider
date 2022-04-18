import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { img, name, price, about } = service;
  const navigate = useNavigate();
  const serviceDetails = () => {
    navigate("/serviceDetails");
  };
  return (
    <div
      className="card col-sm-12 col-md-6 col-lg-4"
      style={{ width: "24rem" }}
    >
      <img src={img} class="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">price:{price}</p>
        <p className="card-text">{about}</p>
        <div className="text-center">
          <button
            onClick={serviceDetails}
            className="bg-primary border-0 rounded text-white"
          >
            Book now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
