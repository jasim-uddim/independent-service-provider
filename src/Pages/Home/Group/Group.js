import React from "react";

const Group = ({ group }) => {
  const { img, name, price, about } = group;
  return (
    <div className="p-2 mt-5" id="group">
      <img src={img} alt="" />
      <h1>name:{name}</h1>
      <p>price :$ {price}</p>
      <p>{about}</p>
      <button className="bg-primary">book now</button>
    </div>
  );
};

export default Group;
