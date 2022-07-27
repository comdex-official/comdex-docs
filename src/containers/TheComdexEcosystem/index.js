import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const TheComdexEcosystem = () => {
  return (
    <div>
      <h2>The Comdex Ecosystem</h2>
      
      <ol className="ecosystem-list">
        <li>
          <b>Enterprise trade:</b> A B2B application built to tokenize real-world commodity assets and facilitate instant trade, settlements and financing.
        </li>
        <li>
          <b>cAsset:</b> A synthetics application to enable the creation and exchange of synthetic assets using IBC-enables assets as collateral
        </li>
        <li>
          <b>Commodo:</b> An IBC-native collateralised lending protocol. Coming soon…
        </li>
        <li>
          <b>ShipFi:</b> Digitization {"&"} exchange of ownership of commodity trade finance debt. Coming soon…
        </li>
        <li>
          <b>CMST:</b> An IBC-enabled stablecoin, native to the Comdex ecosystem. 
        </li>
        <li>
          <b>HARBOR:</b> Governance token for Harbor.
        </li>
        <li>
          <b>cSwap:</b> a dex build on the comdex network.
        </li>
      </ol>

      <BottomNav
        preNavLink="/introduction"
        prevNavText="Introduction"
        nextNavLink="/asset"
        nextNavText="Asset"
      />

    </div>
  );
};

export default TheComdexEcosystem;