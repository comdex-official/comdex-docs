import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const Collector = () => {
  return (
    <div>
      <h2>Collector</h2>
      <h3>Overview</h3>
      <p>
        Collector module keeps track of protocol earning via penalty,opening/closing fee etc.Collector keeps track of app earning for each individual asset .Protocol can decide to use the excess fund for rewarding locker depositors or participate in surplus auction and can also participate in debt auction if protocol is deficit of funds for an asset and app.
      </p>
      <p>Track fee collector from various sources app and asset wise</p>
      <h4>State</h4>
      <pre>
        {`message AppIdToAssetCollectorMapping {
 uint64 app_id 
 repeated AssetIdCollectorMapping asset_collector 
}
message AssetIdCollectorMapping {
 uint64 asset_id 
 CollectorData collector 
}

message CollectorData {
 string collected_stability_fee 
 string collected_closing_fee 
 string collected_opening_fee
 string liquidation_rewards_collected }`}
      </pre>

      <p>Track net fee collected in by app and asset wise</p>
      <pre>
        {`message NetFeeCollectedData {
 uint64 app_id 
 repeated AssetIdToFeeCollected assetIdToFeeCollected 
}


message AssetIdToFeeCollected {
 uint64 asset_id 
 string net_fees_collected
}`}
      </pre>

      <p>Stores various params with app and asset wise</p>

      <pre>
        {`message CollectorLookup {
 uint64 app_id 
 repeated CollectorLookupTable asset_rate_info }

message CollectorLookupTable {
 uint64 app_id 
 uint64 collector_asset_id 
 uint64 secondary_asset_id 
 uint64 surplus_threshold 
 uint64 debt_threshold 
 string locker_saving_rate 
 uint64 lot_size 
 string bid_factor 
 uint64 debt_lot_size 
}`}
      </pre>

      <p>Set Auction params app and asset wise</p>

      <pre>
        {`message CollectorAuctionLookupTable {
 uint64 app_id 
 repeated AssetIdToAuctionLookupTable assetIdToAuctionLookup 
}

message AssetIdToAuctionLookupTable {
 uint64 asset_id 
 bool is_surplus_auction 
 bool is_debt_auction 
 bool is_auction_active
 bool asset_out_oracle_price 
 uint64 asset_out_price 
}`}
      </pre>

      <BottomNav
        preNavLink="/bandoracle"
        prevNavText="Bandoracle"
        nextNavLink="/esm"
        nextNavText="ESM"
      />

    </div>
  );
};

export default Collector;