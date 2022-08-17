import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const Liquidation = () => {
  return (
    <div>
      <h2>Liquidation</h2>
      <h3>Overview</h3>
      <p>
        Liquidation module handles the vaults that have been liquidated ( i.e collateralization ratio falls below the minimum collateralization ratio).A locked vault is created once a vault is liquidated and the vault owner will have no access to the vault to perform any action. <br />
        Apps can decide to enable/disable liquidations for their apps through the governance proposal in smart contracts.
      </p>
      
      <h4>STATE:</h4>
      <pre>
        {`message LockedVault {
 uint64 id 
 uint64 app_id 
 string app_vault_type_id
 string original_vault_id
 uint64 extended_pair_vault_id
 string owner 
 string amount_in
 string amount_out
 string updated_amount_out 
 string initiator
 bool is_auction_complete
 string cr_at_liquidation
 string current_collateralisation_ratio
 string collateral_to_be_auctioned
 google.protobuf.Timestamp liquidation_timestamp 
 repeated string selloff_history
 string interest_accumulated
oneof kind {
    BorrowMetaData borrow_meta_data
  }
}`}
      </pre>

      <p>LockedVaultToAppMapping:Maps list of LockedVaults for an app.</p>
      <pre>
        {`message LockedVaultToAppMapping {
 uint64 app_id 
 repeated LockedVault locked_vault
}
 
message WhitelistedAppIds{
 repeated uint64 whitelisted_app_ids 
 }`}
      </pre>

      <p>BorrowMetaData: It stores the additional info of the borrow positions from the Lend Module.</p>
      <pre>
        {`message BorrowMetaData {
  uint64 lending_id 
  bool is_stable_borrow 
  string stable_borrow_rate 
  cosmos.base.v1beta1.Coin bridged_asset_amount 
}`}
      </pre>

      <BottomNav
        preNavLink="/lend"
        prevNavText="Lend"
        nextNavLink="/liquidity"
        nextNavText="Liquidity"
      />

    </div>
  );
};

export default Liquidation;