import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const BuildIntroduction = () => {
  return (
    <div>
      <h2>Build dApp on comdex</h2>
      <h3>Introduction</h3>
      <p>
        A CDP based dApp on the Comdex chain can be built in go with a series of below mentioned steps . The generic modules of the Comdex chain enable different dapps to co-exist, having their individual specific functionalities.
      </p>

      <BottomNav
        preNavLink="/vault"
        prevNavText="Vault"
        nextNavLink="/build-introduction"
        nextNavText="Introduction"
      />

    </div>
  );
};

export default BuildIntroduction;