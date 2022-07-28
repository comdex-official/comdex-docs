import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const UsingGenericModules = () => {
  return (
    <div>
      <h2>Using generic modules</h2>
      <p>
        Here are the list of generic modules that all dApps can utilise :
      </p>
      <ol className="ugm-list" type="a">
        <li><b>Asset:</b> Manages all asset(s) , pair(s) , extended pair(s) and app(s)</li>
        <li><b>Vault:</b> Base  module for managing CDP (Collateralized Debt Position).</li>
        <li><b>Collector:</b> Manages Protocol collection for dApps</li>
        <li><b>Locker:</b> Manages asset deposits for dApps</li>
        <li><b>Auction:</b> Manages auction for liquidated vaults for dApps</li>
        <li><b>Tokenmint:</b> Allows dApps to mint their custom tokens (assets).</li>
        <li><b>Rewards:</b> Manages internal and external rewards for dApps.</li>
        <li><b>Liquidity:</b> Manages the logic for Dex.</li>
      </ol>

      <h2>Steps to Launch a dApp</h2>
      <h3>1. Register an application(app)</h3>
      <p>
        Asset module is responsible for maintaining different apps on the chain.A proposal must be raised to register an app on the comdex chain which once passed will be used to communicate with all module functionality independently.
      </p>
      <p>Proposal Msg:</p>
      <p>comdex tx gov submit-proposal add-app {`<app_name> <app_shortname>  <min_gov_deposit> <governance_voting_period(in sec)>`}</p>

      <h3>2. Whitelist an Asset</h3>
      <p>As a next step , a new asset can be whitelisted via asset module, which once done can be used by any dApp in the Comdex chain.</p>
      <p>Proposal Msg:</p>
      <p>comdex tx gov submit-proposal add-assets {`<asset_name> <denom> <gov_time_in_sec> <decimal> <is_on_chain> <asset_out_oracle_price>`}</p>

      <h3>Create an Asset pair</h3>
      <p>Asset module can now be leveraged to create an asset pair that can be used by the vault module to create a vault from the pair</p>
      <p>Proposal:</p>
      <p> comdex tx gov submit-proposal add-pairs [asset-in] [asset-out]</p>

      <h3>Map an Asset for App</h3>
      <p>Any dApp that wishes to generate its own token can do so via the tokenmint module . The module can mint several new custom tokens for the dApp out of which at only one asset can be the governance token for the dapp.</p>
      <p>Proposal:</p>
      <p>comdex tx gov submit-proposal add-asset-in-app --add-asset-mapping-file assetmap.json</p>
      <pre>
        {`assetmap.json

{
 "app_id" : 
 "asset_id" :,
 "genesis_supply" : ,
 "is_gov_token" : , 
 "recipient" :  ,
 "title" :  ,
 "description" : ,
 "deposit" :
}
`}
      </pre>

      <h3>Mint the Custom Tokens</h3>
      <p>Once the above proposals are passed , the designated recipient can call the tx command to mint the genesis supply to its respective account (only once).</p>
      <p>Tx Msg:</p>
      <p>comdex tx tokenmint tokenmint [app_id] [asset_id]</p>

      <h3>Governance</h3>
      <p>All dApps can use a single existing governance contract with their designated governance token assigned through the tokenmint module above.</p>
      <p>Below mentioned are the list of proposals that can be raised via contracts for a specific dApp</p>

      <div className="pl-3">
        <h4>1. Create extended pair vault :</h4>
        <p>Description: Its an asset pair extension comprising specific vault properties like minimum collateralization ratio , fee on vault creation or opening etc.</p>
        <p>Msg Struct:</p>
        <pre>
          {`{"msg_add_extended_pairs_vault":{"app_id":,
            "pair_id":,
                  "stability_fee":,
                "closing_fee": ,
                  "liquidation_penalty": ,
                  "draw_down_fee": ,
                  "is_vault_active":,
                  "debt_ceiling": ,
                  "debt_floor":,
                  "is_stable_mint_vault": ,
                  "min_cr":,
                  "pair_name" : ,
                "asset_out_oracle_price":,
              "asset_out_price":,
              "min_usd_value_left": }}`}
        </pre>

        <h4>2. Initialise collector data</h4>
        <p>Description: A collector can contains protocol earning. Each collected asset for an app is tracked by collector. The proposal signals to add collector asset i.e the accumulated asset for an app with a secondary asset that takes part in a surplus or debt auction is the app is enables for the same.It also has the locker_saving_rate that distributes rewards to locker depositors for collector asset in the same app on a per-block basis based on the locker_saving_rate defined in the proposal.</p>
        <p>Msg Struct:</p>
        <pre>
        {`{"msg_set_collector_lookup_table":{"app_id" :,
          "collector_asset_id" :,
          "secondary_asset_id" :,
          "surplus_threshold" :,
          "debt_threshold":,
          "locker_saving_rate":,
          "lot_size":,
          "bid_factor":,
            "debt_lot_size":}}`}
        </pre>


        <h4>3. Whitelist Asset for locker</h4>
        <p>Description: This proposals signals to set the asset_id eligible for locker functionalities for the given app_id .Locker creation, withdrawal or deposit can then be performed.</p>
        <p>Msg Struct:</p>
        <pre>
          {`{"msg_white_list_asset_locker":{"app_id":,
"asset_id":}}`}
        </pre>


        <h4>4. Activate App for Locker rewards for Specific Asset/s</h4>
        <p>
          Description: This Proposals signals to make all lockers eligible for the given asset_id and app_id to receive locker rewards based on the locker_saving_rate defined in the collector lookup for the asset_id and app_id.
        </p>
        <p>Msg Struct:</p>
        <pre>
          {`{"msg_whitelist_app_id_locker_rewards":{"app_id":,
       "asset_id":}}`}
        </pre>


        <h4>5. Activate App for vault stability fee accrual (across all vault type)</h4>
        <p>Description: The proposals triggers the fee accrual for all existing vaults under an app_id.</p>
        <p>Msg Struct:</p>
        <pre>
          {`{"msg_whitelist_app_id_vault_interest":{"app_id":1}}`}
        </pre>


        <h4>6. WhiteList App Id for Liquidation</h4>
        <p>Description: The proposal sets all vaults eligible for liquidation for a given app_id.</p>
        <p>Msg Struct:</p>
        <pre>
          {`{"msg_whitelist_app_id_liquidation":{"app_id":1}}`}
        </pre>

        <h4>7. Set Auction Mapping Eligibility for Asset (Surplus and Debt Auction)</h4>
        <p>Description: Its an asset pair extension comprising specific vault properties like minimum collateralization ratio , fee on vault creation or opening etc.</p>
        <p>Msg Struct:</p>
        <pre>
  {`{"msg_set_auction_mapping_for_app":{"app_id" :,
    "asset_id" :,
    "is_surplus_auction" :,
    "is_debt_auction":,
    "asset_out_oracle_price":,
    "asset_out_price":
    }}`}
        </pre>


        <h4>8. Update Collector Lookup for an asset</h4>
        <p>Description: Its an asset pair extension comprising specific vault properties like minimum collateralization ratio , fee on vault creation or opening etc.</p>
        <p>Msg Struct:</p>
        <pre>
  {`{"msg_update_collector_lookup_table":{"app_id":,
  ,"asset_id":
    ,"lsr":
    ,"debt_threshold":
    ,"surplus_threshold":
    ,"lot_size": ,
    "debt_lot_size":,
    "bid_factor":}}`}
        </pre>


        <h4>9. Update Extended Pair Vault data</h4>
        <p>Description: Its an asset pair extension comprising specific vault properties like minimum collateralization ratio , fee on vault creation or opening etc.</p>
        <p>Msg Struct:</p>
        <pre>
  {`{"msg_update_pairs_vault":{"app_id" :,
    "ext_pair_id" :,
    "stability_fee" : ,
    "closing_fee":"0.0",
    "liquidation_penalty": ,
    "draw_down_fee": ,
    "min_cr": ,
    "debt_ceiling": ,
    "debt_floor": ,
    "min_usd_value_left": }}`}
        </pre>

        
        <h4>10. Deactivate Asset for locker rewards</h4>
        <p>Description: Its an asset pair extension comprising specific vault properties like minimum collateralization ratio , fee on vault creation or opening etc.</p>
        <p>Msg Struct:</p>
        <pre>
          {`{"msg_remove_whitelist_asset_locker":{"app_id":
      ,"asset_id":}}`}
        </pre>

        <h4>11. Deactivate Stability Fee accruel for all vaults across App</h4>
        <p>Description: Its an asset pair extension comprising specific vault properties like minimum collateralization ratio , fee on vault creation or opening etc.</p>
        <p>Msg Struct:</p>
        <pre>
          {`{"msg_remove_whitelist_app_id_vault_interest":{"app_id":}}`}
        </pre>

        <h4>12. Remove Whitelist App_id for liquidation </h4>
        <p>Description: Its an asset pair extension comprising specific vault properties like minimum collateralization ratio , fee on vault creation or opening etc.</p>
        <p>Msg Struct:</p>
        <pre>
          {`{"msg_remove_whitelist_app_id_liquidation":{"app_id":}}`}
        </pre>

        <h4>13. Set/update ESM params</h4>
        <p>Description: Its an asset pair extension comprising specific vault properties like minimum collateralization ratio , fee on vault creation or opening etc.</p>
        <p>Msg Struct:</p>
        <pre>
{`"msg_add_e_s_m_trigger_params":{"app_id":,
  "target_value":{"amount":, "denom":},
      "cool_off_period":}}`}
        </pre>

        <h4>14. Set/Update auction params</h4>
        <p>Description: Its an asset pair extension comprising specific vault properties like minimum collateralization ratio , fee on vault creation or opening etc.</p>
        <p>Msg Struct:</p>
        <pre>
{` {"msg_add_auction_params":{"app_id": ,
      "auction_duration_seconds":,
      "buffer":,
      "cusp":,
      "step":,
      "price_function_type":,
      "surplus_id":,
      "debt_id":,
      "dutch_id":,
      "bid_duration_seconds":}}`}
        </pre>

      </div>

      <BottomNav
        preNavLink="/build-introduction"
        prevNavText="Introduction"
        nextNavLink="/local-node-setup"
        nextNavText="Local Node Setup"
      />

    </div>
  );
};

export default UsingGenericModules;