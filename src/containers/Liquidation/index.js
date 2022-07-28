import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const Liquidation = () => {
  return (
    <div>
      <h2>Liquidation</h2>
      <p>
        ...
      </p>

      <BottomNav
        preNavLink="/lend"
        prevNavText="Lend"
        nextNavLink="/liquidity"
        nextNavText="Liquidity"
      />

    </div>
  );
};

export default Liquidation;