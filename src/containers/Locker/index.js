import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const Locker = () => {
  return (
    <div>
      <h2>Locker</h2>
      <p>
        ...
      </p>

      <BottomNav
        preNavLink="/liquidity"
        prevNavText="Liquidity"
        nextNavLink="/market"
        nextNavText="Market"
      />

    </div>
  );
};

export default Locker;