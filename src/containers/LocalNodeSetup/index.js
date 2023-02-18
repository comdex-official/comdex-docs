import React from "react";
import { BottomNav } from "../../components/common";
import { Link } from "react-router-dom";
import "./index.less";

const LocalNodeSetup = () => {
  return (
    <div>
      <h2>Local Node Setup</h2>
      <p>
        Please go through the steps mentioned below to set up the local net : 
      </p>
      <Link to={{ pathname: 'https://github.com/comdex-official/comdex/blob/development/scripts/comdex_local_setup/README.md' }} target="_blank">
        https://github.com/comdex-official/comdex/blob/development/scripts/comdex_local_setup/README.md
      </Link>

      <BottomNav
        preNavLink="/build-dapp"
        prevNavText="Build dApp on comdex"
        nextNavLink="/ibc-mainnet"
        nextNavText="Mainnet IBC channels for comdex-1"
      />

    </div>
  );
};

export default LocalNodeSetup;