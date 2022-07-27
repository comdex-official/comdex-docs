import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const LocalNodeSetup = () => {
  return (
    <div>
      <h2>Local Node Setup</h2>
      <p>
        ...
      </p>

      <BottomNav
        preNavLink="/using-generic-modules"
        prevNavText="Using Generic Modules"
        nextNavLink="/test-net"
        nextNavText="Join comdex Test Net as a validator"
      />

    </div>
  );
};

export default LocalNodeSetup;