import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const Rewards = () => {
  return (
    <div>
      <h2>Rewards</h2>
      <p>
        ...
      </p>

      <BottomNav
        preNavLink="/market"
        prevNavText="Market"
        nextNavLink="/tokenmint"
        nextNavText="Tokenmint"
      />

    </div>
  );
};

export default Rewards;