import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { img, name, price, about } = service;
  const navigate = useNavigate();
  const serviceDetails = () => {
    navigate("/serviceDetails");
  };
  return (
    <div className="p-2 mt-5 col-sm-12 col-md-6 col-lg-4">
      <img style={{ height: "400px" }} className="w-100" src={img} alt="" />
      <h1> {name}</h1>
      <p className="p-2">price :${price}</p>
      <p className="p-2">{about}</p>
      <div className="text-center">
        <button
          onClick={serviceDetails}
          className="bg-primary border-0 rounded text-white"
        >
          Book now
        </button>
      </div>
    </div>
  );
};

export default Service;
