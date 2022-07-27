import React from "react";
import { Link } from "react-router-dom";
import { BottomNav } from "../../components/common";
import "./index.less";

const JoincomdexTestNet = () => {
  return (
    <div>
      <h2>Join comdex Test Net as a validator</h2>
      <p>
        Checkout the documentation to join comdex test network : 
      </p>
      <Link to={{ pathname: 'https://github.com/comdex-official/networks/tree/main/testnet' }} target="_blank">https://github.com/comdex-official/networks/tree/main/testnet
      </Link>
      <p>
        Test Net chain ID : meteor-test <br />
        Current Test Net Version : v2.1.0
      </p>

      <BottomNav
        preNavLink="/local-node-setup"
        prevNavText="Join comdex Test Net as a validator"
        nextNavLink="/main-net"
        nextNavText="Join comdex Main Net as a validator"
      />

    </div>
  );
};

export default JoincomdexTestNet;