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
        preNavLink="/introduction"
        prevNavText="Introduction"
        nextNavLink="/mechanism"
        nextNavText="Mechanism"
      />

    </div>
  );
};

export default Locker;