import React from "react";
import aqua from "../../images/aqua/aqua.jpg";

const ExtraPage = () => {
  return (
    <div>
      <img
        style={{ height: "600px" }}
        className="w-100 p-2 mt-5"
        src={aqua}
        alt=""
      />
      <h1 className="text-center text-primary">MOVATI AQUA</h1>
      <p className="p-5">
        Power laps. Group classes. Or just a relaxing dip after a good workout.
        Make a splash whichever way you prefer. Our spa-like aqua fitness
        facilities and amenities will make you feel like you’re on a little
        resort getaway. Come in and test the waters for yourself.
      </p>
    </div>
  );
};

export default ExtraPage;
