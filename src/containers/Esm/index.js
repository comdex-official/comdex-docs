import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const Esm = () => {
  return (
    <div>
      <h2>ESM</h2>
      <h3>Overview</h3>
      <p>
        Emergency Shutdown is triggered in the case of serious emergencies, such as long-term market irrationality, hacks, or security breaches.Emergency Shutdown stops and gracefully settles the Protocol.Emergency shutdown is triggered by the protocol’s holders by burning their governance token. Once the target amount is reached , users can trigger the ESM via tx command. 
      </p>
      
      <h4>State</h4>
      <p>Sets the deposit target value, cool off period and asset rates for ESM.</p>
      <pre>
        {`message ESMTriggerParams {
  uint64 app_id
  cosmos.base.v1beta1.Coin target_value 
  uint64 cool_off_period 
  repeated DebtAssetsRates assetsRates 
}


message DebtAssetsRates {
  uint64 asset_id 
  uint64 rates 
}`}
      </pre>

      <p>Sets ESM status after execution of ESM.</p>
      <pre>
        {`message ESMStatus{
  uint64 app_id 
  string executor 
  bool status 
  google.protobuf.Timestamp start_time 
  google.protobuf.Timestamp end_time 
  bool vault_redemption_status 
  bool stable_vault_redemption_status 
  bool snapshotStatus 
}`}
      </pre>

      <p>Sets if Kill Switch is enabled or not.</p>

      <pre>
        {`message KillSwitchParams{
  uint64 appId 
  bool breaker_enable 
}`}
      </pre>

      <p>Sets the user wise deposit for triggering the ESM.</p>

      <pre>
        {`message UsersDepositMapping{
  uint64 app_id
  string depositor 
  cosmos.base.v1beta1.Coin deposits 
}`}
      </pre>

      <p>Sets Collateral and debt asset data after Expiration of cool off period</p>

      <pre>
        {`message DataAfterCoolOff {
  uint64 appId 
  repeated AssetToAmount collateral_asset 
  repeated AssetToAmount debt_asset 
  string collateral_total_amount 
  string debt_total_amount 
}

message AssetToAmount {
  uint64 asset_id 
  string amount 
  string share 
  string debt_token_worth 
}`}
      </pre>

      <h4>Messages</h4>
      <p>Deposit Amount in order to trigger ESM</p>

      <pre>
        {`message MsgDepositESM {
  uint64                   app_id 
  string                depositor 
  cosmos.base.v1beta1.Coin amount 
}`}
      </pre>

      <p>Execute ESM after deposit has reached </p>
      <pre>
        {`message MsgExecuteESM {
  uint64                   app_id 
  string                depositor 
}`}
      </pre>

      <p>Trigger kill switch app wise </p>
      <pre>
        {`message MsgKillRequest {
  string from    
  KillSwitchParams killSwitchParams 

}`}
      </pre>

      <p>To redeem Collaterals after cool off period has passed</p>
      <pre>
        {`message MsgCollateralRedemptionRequest {
  uint64                   app_id 
  cosmos.base.v1beta1.Coin amount 
  string                   from  
}`}
      </pre>

      <BottomNav
        preNavLink="/collector"
        prevNavText="Collector"
        nextNavLink="/lend"
        nextNavText="Lend"
      />

    </div>
  );
};

export default Esm;