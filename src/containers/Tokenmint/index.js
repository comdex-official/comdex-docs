import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const Tokenmint = () => {
  return (
    <div>
      <h2>Tokenmint</h2>
      <p>
        ...
      </p>

      <BottomNav
        preNavLink="/rewards"
        prevNavText="Rewards"
        nextNavLink="/vault"
        nextNavText="Vault"
      />

    </div>
  );
};

export default Tokenmint;