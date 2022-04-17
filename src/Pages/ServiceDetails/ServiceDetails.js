import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceDetails = () => {
  const navigate = useNavigate();
  const handleCheckOut = () => {
    navigate("/checkout");
  };
  return (
    <div>
      <h1 className="text-center text-primary my-5">special service</h1>
      <div className="text-center">
        <button onClick={handleCheckOut} className="bg-primary p-2">
          proceed checkout
        </button>
      </div>
    </div>
  );
};

export default ServiceDetails;
