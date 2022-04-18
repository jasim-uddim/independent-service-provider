import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { img, name, price, about } = service;
  const navigate = useNavigate();
  const serviceDetails = () => {
    navigate("/serviceDetails");
  };
  return (
    <div className="card col-sm-12 col-md-6 col-lg-4 p-2 mx-auto">
      <img
        style={{ height: "410px" }}
        src={img}
        className="card-img-top w-100"
        alt="..."
      />
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
