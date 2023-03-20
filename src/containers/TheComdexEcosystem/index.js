import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const TheComdexEcosystem = () => {
  return (
    <div>
      <h2>The Comdex Ecosystem</h2>
      
      <ul className="ecosystem-list">
        <li>
          <b>Harbor:</b> HARBOR protocol is the dApp on the Comdex chain (powered by the Cosmos SDK and CosmWasm smart contracts) that enables safelisted assets to be locked in Vaults and mint Composite. Composite ($CMST) is an IBC-native fully-collateralized stablecoin.
        </li>
        <li>
          <b>CMST:</b> An IBC Enabled stablecoin, native to the Comdex Ecosystem, Composite ($CMST) is a stablecoin designed to represent purchasing power and is therefore soft pegged to $1. $CMST can be minted permissionlessly as a debt against over-collateralized CDPs
        </li>
        <li>
          <b>cSwap:</b> cSwap is an IBC-enabled hybrid dex built on the Comdex chain. cSwap uses AMM liquidity pools which bring cross-chain markets and limit orders to DeFi. Through this mechanism, cSwap will be a go-to platform for traders and arbitrageurs, enabling them to implement sophisticated trading strategies.
        </li>
        <li>
          <b>Commodo:</b> Commodo is a decentralised, open-source, IBC-native, collateralised lending-borrowing platform on Cosmos. Commodo tries to alleviate these pain points in existing lending-borrowing markets. It has a distinctive architectural design with cPools and transit assets.
        </li>
        <li>
          <b>Enterprise Trade:</b> This platform will allow its users to facilitate real-world trade financing using digital assets as collateral, thus providing its Enterprise users with readily accessible liquidity to meet their demands.
        </li>
        <li>
          <b>cAsset</b> cAsset is a synthetics protocol, it will allow users to gain exposure to different synthetic assets whilst remaining on-chain.
        </li>
        <li>
          <b>ShipFi:</b> ShipFi enables the collateralization of real-world assets as NFTs, utilizing the $SHIP token. ShipFi will facilitates the digitization of trade finance debt products.
        </li>
      </ul>

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