import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const Market = () => {
  return (
    <div>
      <h2>Market</h2>
      <p>
        ...
      </p>

      <BottomNav
        preNavLink="/locker"
        prevNavText="Locker"
        nextNavLink="/rewards"
        nextNavText="Rewards"
      />

    </div>
  );
};

export default Market;