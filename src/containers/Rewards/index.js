import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const Rewards = () => {
  return (
    <div>
      <h2>Rewards</h2>
      <h3>STATE:</h3>
      <pre>
        {`message EpochInfo {
   google.protobuf.Timestamp start_time 
   google.protobuf.Duration duration 
   int64 current_epoch 
   google.protobuf.Timestamp current_epoch_start_time 
   int64 current_epoch_start_height 
}

message Gauge {
   uint64 id 
   string from 
   google.protobuf.Timestamp created_at 
   google.protobuf.Timestamp start_time
   uint64 gauge_type_id 
   google.protobuf.Duration trigger_duration
   cosmos.base.v1beta1.Coin deposit_amount 
   uint64 total_triggers 
   uint64 triggered_count 
   cosmos.base.v1beta1.Coin distributed_amount
   bool is_active
   bool for_swap_fee 
   oneof kind {
     LiquidtyGaugeMetaData liquidity_meta_data 
   }
   uint64 app_id }


message GaugeByTriggerDuration {
   repeated uint64 gauge_ids
}

message Internal_rewards{
 uint64 app_mapping_ID
 repeated uint64 asset_ID 
}


message Locker_external_rewards{
 uint64 id 
 uint64 app_mapping_id
 uint64 asset_id 
 cosmos.base.v1beta1.Coin total_rewards 
 int64 duration_days
 bool is_active 
 cosmos.base.v1beta1.Coin available_rewards  
 string depositor
 google.protobuf.Timestamp start_timestamp
 google.protobuf.Timestamp end_timestamp 
 int64 min_lockup_time_seconds 
 uint64 epoch_id }
 


message Vault_external_rewards{
 uint64 id 
 uint64 app_mapping_id
 uint64 extended_Pair_Id
 cosmos.base.v1beta1.Coin total_rewards
 int64 duration_days 
 bool is_active 
 cosmos.base.v1beta1.Coin available_rewards
 string depositor 
 google.protobuf.Timestamp start_timestamp 
 google.protobuf.Timestamp end_timestamp 
 int64 min_lockup_time_seconds 
 uint64 epoch_id }
 



message WhitelistedAppIdsVault{
 repeated uint64 whitelisted_app_mapping_ids_vaults }
 
message EpochTime{
 uint64 id 
 uint64 app_mapping_id 
 int64 starting_time
 uint64 count 
}`}
      </pre>

      <BottomNav
        preNavLink="/market"
        prevNavText="Market"
        nextNavLink="/tokenmint"
        nextNavText="Tokenmint"
      />

    </div>
  );
};

export default Rewards;