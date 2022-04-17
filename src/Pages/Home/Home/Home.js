import React from "react";
import Banner from "../../Banner/Banner";
import ExtraPage from "../../ExtraPage/ExtraPage";
import GroupServices from "../GroupServices/GroupServices";
import OnlineServices from "../OnlineServices/OnlineServices";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <GroupServices></GroupServices>
      <OnlineServices></OnlineServices>
      <ExtraPage></ExtraPage>
    </div>
  );
};

export default Home;
