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
        preNavLink="/using-generic-modules"
        prevNavText="Using Generic Modules"
        nextNavLink="/test-net"
        nextNavText="Join comdex Test Net as a validator"
      />

    </div>
  );
};

export default LocalNodeSetup;