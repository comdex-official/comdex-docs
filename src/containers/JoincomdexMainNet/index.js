import React from "react";
import { BottomNav } from "../../components/common";
import { Link } from "react-router-dom";
import "./index.less";

const JoincomdexMainNet = () => {
  return (
    <div>
      <h2>Join comdex Main Net as a validator</h2>
      <p>
        Checkout the documentation to join comdex main network : 
      </p>
      <p>
        <Link to={{ pathname: 'https://github.com/comdex-official/networks/tree/main/mainnet' }} target="_blank">https://github.com/comdex-official/networks/tree/main/mainnet
      </Link>
      </p>
      <p>
        Test Net chain ID : meteor-test <br />
        Current Test Net Version : v2.1.0
      </p>

      <BottomNav
        preNavLink="/test-net"
        prevNavText="Join comdex Test Net as a validator"
      />

    </div>
  );
};

export default JoincomdexMainNet;