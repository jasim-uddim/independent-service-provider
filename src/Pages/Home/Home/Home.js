import React from "react";
import Banner from "../../Banner/Banner";
import GroupServices from "../GroupServices/GroupServices";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <GroupServices></GroupServices>
    </div>
  );
};

export default Home;
