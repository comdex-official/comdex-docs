import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const Auction = () => {
  return (
    <div>
      <h2>Auction</h2>
      <h3>Overview</h3>
      <p>
        Auction module holds the key functionality for creating /managing auctions across all apps. <br />
        The auction module has three distinct auction model 
      </p>
      <ol>
        <li>
         <b>Dutch Auction:</b> Collateral auctions for the liquidated vaults take place via this mechanism.Bidders can bid for partial collateral at a price that keeps varying with auction duration starting with a high price and decreasing linearly.
        </li>
        <li>
          <b>Surplus Auction</b> Excess surplus of  an asset (collector_asset_id in CollectorLookupTable in Collector module)  is auctioned off for an increasing amount of secondary_asset_id .After the completed auction duration the excess surplus is sent to bidder with highest amount of secondary_asset_id bid.The amount of  secondary_asset_id bid received is the burned via tokenmint module.
        </li>
        <li>
          <b>Debt Auction</b>(Reverse Auction): When protocol runs in debt for an asset_id(collector_asset_id in CollectorLookupTable in Collector module) , the debt auction can be triggered to accumulate collector_asset_id for which bidders bids against decreasing amount of secondary_asset_id.Once auction duration is completed , the bidder with lowest bid for secondary_asset_id wins the bid and protocol mints the bid amount of secondary_asset_id for the winner.
        </li>
      </ol>

      <h3>State</h3>
      <h4>Surplus Auction </h4>
      <p>
        Surplus Auction is an English auction where bidders compete against each other for increasing bids they are willing to pay against a fixed lot of an asset they will receive.
      </p>
      <pre>
        {`message SurplusAuction {
   uint64 auction_id 
   cosmos.base.v1beta1.Coin sell_token
   cosmos.base.v1beta1.Coin buy_token 
   uint64 active_bidding_id
   string bidder 
   cosmos.base.v1beta1.Coin bid
   google.protobuf.Timestamp end_time
   string bid_factor 
   repeated bidOwnerMapping bidding_ids 
   uint64 auction_status 
   uint64 app_id 
   uint64 asset_id 
   uint64 auction_mapping_id 
   uint64 asset_in_id 
   uint64 asset_out_id 
   google.protobuf.Timestamp bid_end_time  }`}
      </pre>

      <h4>Debt Auction</h4>
      <p>Debt auction is a reverse auction where bidders bid against the decreasing amount of the receiving asset for a fixed amount of asset they are asked to in the auction.</p>
      <pre>
        {`message DebtAuction {
   uint64 auction_id 
   cosmos.base.v1beta1.Coin auctioned_token 
   cosmos.base.v1beta1.Coin expected_user_token 
   cosmos.base.v1beta1.Coin expected_minted_token
   google.protobuf.Timestamp end_time 
   uint64 active_bidding_id 
   string bidder 
   cosmos.base.v1beta1.Coin current_bid_amount 
   uint64 auction_status
   uint64 app_id 
   uint64 asset_id
   repeated bidOwnerMapping bidding_ids 
   uint64 auction_mapping_id
   string bid_factor 
   uint64 asset_in_id 
   uint64 asset_out_id 
   google.protobuf.Timestamp bid_end_time
}`}
      </pre>

      <h4>Dutch Auction</h4>
      <p>Dutch Auction is a collateral auction where bidders can partially bid against a collateral amount at a specific auction price which varies as the auction passes by.</p>
      <pre>
        {`message DutchAuction {
   uint64 auction_id 
   cosmos.base.v1beta1.Coin outflow_token_init_amount 
   cosmos.base.v1beta1.Coin outflow_token_current_amount
   cosmos.base.v1beta1.Coin inflow_token_target_amount
   cosmos.base.v1beta1.Coin inflow_token_current_amount
   string outflow_token_initial_price 
   string outflow_token_current_price 
   string outflow_token_end_price 
   string inflow_token_current_price 
   google.protobuf.Timestamp end_time
   uint64 auction_status 
   google.protobuf.Timestamp start_time
   repeated bidOwnerMapping bidding_ids
   uint64 auction_mapping_id 
   uint64 app_id
   uint64 asset_in_id 
   uint64 asset_out_id 
   uint64 locked_vault_id 
   string vault_owner
   string liquidation_penalty
}`}
      </pre>  

      <h4>Messages</h4>
      <b>Place Surplus Auction Bid</b>
      <p>Bidders can bid an amount for a surplus auction in terms of the asset that protocol is accepting.</p>
      <pre>
        {`message MsgPlaceSurplusBidRequest {
   uint64 auction_id 
   string bidder 
   cosmos.base.v1beta1.Coin amount 
   uint64 app_id 
   uint64 auction_mapping_id
`}
      </pre> 
      
      <b>Place Debt Auction Bid</b>
      <p>Bidders can bid an amount for a debt auction in terms of the asset that protocol is accepting.</p>
      <pre>
        {`message MsgPlaceDebtBidRequest {
   uint64 auction_id 
   string bidder 
   cosmos.base.v1beta1.Coin bid 
   cosmos.base.v1beta1.Coin expectedUserToken 
   uint64 app_id 
   uint64 auction_mapping_id }`}
      </pre> 

      <b>Place Dutch Auction Bid</b>
      <p>
        Bidders can bid an amount for a dutch auction in terms of how much collateral they want to buy and the max price that should be greater than current price of collateral.
      </p>
      <pre>
        {`message MsgPlaceDutchBidRequest {
   uint64 auction_id 
   string bidder 
   cosmos.base.v1beta1.Coin amount 
   string max
   uint64 app_id 
   uint64 auction_mapping_id }`}
      </pre> 


      <BottomNav
        preNavLink="/auction"
        prevNavText="Auction"
        nextNavLink="/bandoracle"
        nextNavText="Bandoracle"
      />

    </div>
  );
};

export default Auction;