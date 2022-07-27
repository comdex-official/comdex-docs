import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const Bandoracle = () => {
  return (
    <div>
      <h2>Bandoracle</h2>
      <h3>Overview</h3>
      <p>
        Bandoracle module fetches the prices of assets. A band packet is created containing the list of assets symbols for which price is to be fetched. Then the packet is relayed to the band chain (through a relayer), where the request is acknowledged, and the price is validated. Following this, the price is being sent to our chain through the packets using the same channel. After receiving the packets, the prices are mapped to the corresponding assets. The packets are relayed after every 20 blocks; hence prices are updated after every 20 blocks.
      </p>
      
      <h4>State</h4>
      <pre>
        {`message FetchPriceCallData {
 repeated string symbols 
 uint64 multiplier
}


message FetchPriceResult {
 repeated uint64 rates 
}


message Market {
 string symbol  
 uint64 script_id
}
`}
      </pre>

      <BottomNav
        preNavLink="/auction"
        prevNavText="Auction"
        nextNavLink="/collector"
        nextNavText="Collector"
      />

    </div>
  );
};

export default Bandoracle;