import React from "react";
import { Link } from "react-router-dom";
import { BottomNav } from "../../components/common";
import "./index.less";

const JoincomdexTestNet = () => {
  return (
    <div>
      <h2>Join comdex Test Net as a validator</h2>
      <p>
        We recommend you setting up the cosmovisor, follow the steps below :
      </p>
      <Link to={{ pathname: 'https://github.com/comdex-official/networks/tree/main/testnet/testnet-3/README.md' }} target="_blank">https://github.com/comdex-official/networks/tree/main/testnet/testnet-3/README.md
      </Link>
      <p>Checkout the documentation to join comdex test network : </p>
      <p>
        Test Net chain ID : comdex-test3<br />
        Current Test Net Version : v11.4.0
      </p>

      <p>Follow the below documentation :</p>

      <Link to={{ pathname: 'https://github.com/comdex-official/networks/tree/main/testnet/testnet-3' }} target="_blank">
        https://github.com/comdex-official/networks/tree/main/testnet/testnet-3/README.md
      </Link>

      <BottomNav
        preNavLink="/chain-endpoints"
        prevNavText="Comdex Chain Endpoints"
        nextNavLink="/main-net"
        nextNavText="Join comdex Main Net as a validator"
      />

    </div>
  );
};

export default JoincomdexTestNet;
