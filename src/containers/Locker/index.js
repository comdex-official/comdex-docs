import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const Locker = () => {
  return (
    <div>
      <h2>Locker</h2>
      <h3>Overview</h3>
      <p>
        Locker module enables the user to deposit a whitelisted asset for an app and earn rewards on it . The rewards comes from collector module and is distributed to the locker depositor per block basis for a fixed annual rate (locker_saving_rate , defined in collector lookup for an app_id and asset_id(collector_asset_id))
      </p>

      <h4>STATE:</h4>
      <pre>
        {`message Locker {
 string locker_id 
 string depositor 
 string returns_accumulated 
 string net_balance 
 uint64 asset_deposit_id
 bool is_locked 
 uint64 app_id
}

message UserLockerAssetMapping {
 string owner 
 repeated LockerToAppMapping  locker_app_mapping
}
 message LockerToAppMapping {
 uint64 app_id = 1;
 repeated AssetToLockerMapping user_asset_locker}
}
message AssetToLockerMapping{
 uint64 asset_id 
 string locker_id
 repeated UserTxData user_data
 }
 
message UserTxData{
 string tx_type 
 string amount 
 string balance 
}


message LockerLookupTable {
 uint64 app_id 
 repeated TokenToLockerMapping lockers 
 uint64 counter = 3;
}
message TokenToLockerMapping {
uint64 asset_id = 1;
repeated string locker_ids
 string deposited_amount 
}

message LockerProductAssetMapping {
 uint64 app_id 
 repeated uint64 asset_ids 
}`}
      </pre>

      <p>LockerProductAssetMapping: Contains list of asset_id for an app eligible for locker</p>

      <p>message LockedDepositedAmountDataMap</p>
      <pre>
        {`{
 uint64 asset_id 
 string deposited_amount
}`}
      </pre>
      <p>LockedDepositAmountDataMap: Total deposited amount for an asset_id</p>
      <pre>
        {`message LockerTotalRewardsByAssetAppWise {
 uint64 app_id 
 uint64 asset_id 
 string total_rewards
} `}
      </pre>
      <p>LockerTotalRewardsByAssetAppWise: Total rewards distributed to locker owners for an asset_id and app_id</p>
      <h4>Messages:</h4>

      <p>1. Create Locker for an asset</p>
      <pre>
        {`message MsgCreateLockerRequest{
 string depositor
 string amount 
 uint64 asset_id 
 uint64 app_id 
}`}
      </pre>
      <p>
        MsgCreateLockerRequest: depositor can create a locker for an app_id and asset_id. <br />
        Locker can only be created once for an app_id and asset_id.
      </p>

      <p>2. Deposit Asset in Locker</p>
      <pre>
        {`message MsgDepositAssetRequest {
 string depositor 
 string locker_id 
 string amount 
 uint64 asset_id 
 uint64 app_id 
}`}
      </pre>
      <p>MsgDepositAssetRequest: depositors can deposit an amount in  a locker for an app_id and asset_id.</p>

      <p>3. Withdraw Asset from Locker</p>
      <pre>
        {`message MsgWithdrawAssetRequest {
string depositor
 string locker_id 
 string amount
 uint64 asset_id
 uint64 app_id
}`}
      </pre>
      <p>MsgWithdrawAssetRequest: depositors can withdraw an amount from a locker for an app_id and asset_id.</p>
      <BottomNav
        preNavLink="/liquidity"
        prevNavText="Liquidity"
        nextNavLink="/market"
        nextNavText="Market"
      />

    </div>
  );
};

export default Locker;