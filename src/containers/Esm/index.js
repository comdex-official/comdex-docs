import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const Esm = () => {
  return (
    <div>
      <h2>ESM</h2>
      <p>
        ...
      </p>

      <BottomNav
        preNavLink="/collector"
        prevNavText="Collector"
        nextNavLink="/lend"
        nextNavText="Lend"
      />

    </div>
  );
};

export default Esm;