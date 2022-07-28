import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const Introduction = () => {
  return (
    <div>
      <h2>Introduction</h2>
      <p>
        A DeFi infrastructure layer for the Cosmos ecosystem. A layer-1 infrastructure for seamless deployment of DeFi applications in the Cosmos ecosystem, powering DeFi in the multi-chain future.
      </p>
      <p>
        Comdex launched with a vision to democratise and revolutionise the commodities trade industry, one of the oldest and largest industries in the global economy. The Comdex chain is built to enable bridging of capital to assets across the DeFi and CeFi ecosystems. A truly decentralised ecosystem of solutions enables limitless access to global liquidity in finance.
      </p>
      <p>
        Comdex aims to deliver a robust infrastructure layer that supports seamless creation and deployment of DeFi applications in the Cosmos ecosystem. The Comdex chain enhances investor’s access to a broad range of assets that help investors diversify and generate yield on their investments.
      </p>

      <h3>The Chain</h3>

      <p>
        Plug {"&"} play customizable Comdex modules to deliver bleeding edge dApps
      </p>

      <p>
        <b>CDP module:</b> Enables creation of debt assets through collateralisation of IBC-enabled assets
      </p>

      <p>
        <b>Asset tokenization module:</b> Tokenization of real-world assets as on-chain NFTs 
      </p>

      <p>
        <b>DEX:</b> An AMM-based exchange to facilitate swapping of Comdex ecosystem assets with IBC-enabled assets.
      </p>

      <p>
        <b>P2P Exchange:</b> Enables creation of P2P marketplaces for the exchange of assets in the Comdex ecosystem.
      </p>

      <BottomNav
        preNavLink="/"
        prevNavText="Home"
        nextNavLink="/comdex-ecosystem"
        nextNavText="The Comdex Ecosystem"
      />

    </div>
  );
};

export default Introduction;