import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { img, name, price, about } = service;
  const navigate = useNavigate();
  const serviceDetails = () => {
    navigate("/serviceDetails");
  };
  return (
    <div className="p-2 mt-5">
      <img style={{ height: "400px" }} className="w-100" src={img} alt="" />
      <h1>name: {name}</h1>
      <p>price :${price}</p>
      <p>{about}</p>
      <button
        onClick={serviceDetails}
        className="bg-primary text-center d-block"
      >
        Book now
      </button>
    </div>
  );
};

export default Service;
