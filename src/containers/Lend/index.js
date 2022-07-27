import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const Lend = () => {
  return (
    <div>
      <h2>Lend</h2>
      <p>
        ...
      </p>

      <BottomNav
        preNavLink="/esm"
        prevNavText="ESM"
        nextNavLink="/liquidation"
        nextNavText="Liquidation"
      />

    </div>
  );
};

export default Lend;