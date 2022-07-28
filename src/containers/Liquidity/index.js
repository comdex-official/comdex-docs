import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const Liquidity = () => {
  return (
    <div>
      <h2>Liquidity</h2>
      <p>
        ...
      </p>

      <BottomNav
        preNavLink="/liquidation"
        prevNavText="Liquidation"
        nextNavLink="/locker"
        nextNavText="Locker"
      />

    </div>
  );
};

export default Liquidity;