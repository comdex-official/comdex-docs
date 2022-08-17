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
        Main Net chain ID : comdex-1 <br />
        Current Test Net Version : v0.1.1
      </p>
      <p>
        <Link to={{ pathname: 'https://github.com/comdex-official/networks/blob/main/mainnet/02-validator-post-gentx.md' }} target="_blank">https://github.com/comdex-official/networks/blob/main/mainnet/02-validator-post-gentx.md
      </Link>
      </p>

      <BottomNav
        preNavLink="/test-net"
        prevNavText="Join comdex Test Net as a validator"
      />

    </div>
  );
};

export default JoincomdexMainNet;