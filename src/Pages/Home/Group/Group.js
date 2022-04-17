import React from "react";
import { useNavigate } from "react-router-dom";

const Group = ({ group }) => {
  const { img, name, price, about } = group;
  const navigate = useNavigate();
  const serviceDetails = () => {
    navigate("/serviceDetails");
  };
  return (
    <div className="p-2 mt-5 col-sm-12 col-md-6 col-lg-4" id="group">
      <img src={img} alt="" />
      <h1>name:{name}</h1>
      <p>price :$ {price}</p>
      <p>{about}</p>
      <button
        onClick={serviceDetails}
        className="bg-primary border-0 rounded text-white"
      >
        book now
      </button>
    </div>
  );
};

export default Group;
