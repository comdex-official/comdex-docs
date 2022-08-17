import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const Asset = () => {
  return (
    <div>
      <h2>Asset</h2>
      <h3>Overview</h3>
      <p>
        The <b>x/asset</b> modules facilitate creating Apps, Assets, Pairs , ExtendedPairVault .
      </p>
      <p>
        <b>App:</b> An app needs to be added via governance proposal for a specific protocol.All major functionality is driven at app level , providing an ecosystem from multiple apps to co-exist.
      </p>
      <p>
        <p>Asset:</p> An asset to be used in the chain has to be added via governance proposal.An asset is a common entity and can be used globally by any app .i.e the app can control the use of any in their protocol but cannot control/stop other apps to use the same.
      </p>
      <p>
        <b>Pair:</b> A pair is an ordered combination of 2 assets where first asset is an asset accepted as deposit by protocol and second asset is the one minted by protocol for the user.
      </p>
      <p>
        <b>ExtendedPair:</b> ExtendedPair as the name suggests is an extension of a pair to be used by a specific app for vault creation containing key params for each Collateral - Borrow asset pair.
      </p>

      <h3>State</h3>

      <h4>App</h4>
      <p>
        Apps represent a specific protocol that runs on the Comdex chain. Several different apps can co-exist on the chain having their own specifications and functions.
      </p>

      <pre>
        {`message AppData {
  uint64 id     
  string name      
  string short_name   
  string min_gov_deposit 
  double gov_time_in_seconds 
  repeated MintGenesisToken genesis_token }`}
      </pre>

      <h4>Genesis Token</h4>
      <p>
        Any app can whitelist any custom asset that they wish to use in their protocol. <br />
         MintGenesisToken creates a genesis supply for such a token which can be redeemed by the recipient. An asset can be designated as a governance token for the app which in turn forbids other apps to use the same asset as their governance token.Only one asset can be the governance token for an app.
      </p>
      <pre>
        {`message MintGenesisToken {
   uint64 asset_id 
   string genesis_supply 
   bool is_gov_token 
   string recipient 
}`}
      </pre>

      <h4>Asset</h4>
      <p>Asset Details</p>
      <pre>
        {`message Asset {
 uint64 id      
 string name    
 string denom  
 bool is_on_chain 
 bool is_oracle_price_required 
}`}
      </pre>

      <h4>Extended Pair Vault</h4>
      <p>An Extended pair vault is an extension of a pair that has attributes for a specific vault type like minimum collateralization ratio , opening fee , closing fee etc .</p>
      <pre>
        {`message ExtendedPairVault {
   uint64 id 
   uint64 app_id   
   uint64 pair_id      
   string stability_fee       
   string closing_fee          
   string liquidation_penalty  
   string draw_down_fee   
   bool is_vault_active      
   string debt_ceiling       
   string debt_floor        
   bool is_stable_mint_vault 
   string min_cr 
   string pair_name  
   bool asset_out_oracle_price 
   uint64 asset_out_price  
   uint64 min_usd_value_left 
 }
`}
      </pre>

      <h4>Pair</h4>
      <p>
        An asset pair represents a pair of assets that is required to create a vault to mint an asset where AssetIn is the collateral provided, AssetOut is the asset which we want to mint.
      </p>
      <pre>
        {`message Pair {
 uint64 id      
 uint64 asset_in      
 uint64 asset_out   
}`}
      </pre>

      <h3>Governance</h3>
      <h4>Add App</h4>
      <p>AddAppProposal adds a new app</p>
      <pre>
        {`message AddAppProposal {string title;
  			         string description;
  			         repeated AppData app;}`}
      </pre>

      <h4>Add Asset</h4>
      <p>AddAssetsProposal adds a new asset.</p>
      <pre>
        {`message AddAssetsProposal {
  string title ;
  string description ;
  repeated Asset assets;
}`}
      </pre>

      <h4>Update Asset</h4>
      <p>UpdateAssetProposal updates existing asset.</p>
      <pre>
        {`message UpdateAssetProposal {
  string title ;
  string description ;
  Asset asset ;
}`}
      </pre>

    <h4>Add Pairs</h4>
    <p>AddPairsProposal adds a new asset pair.</p>
    <pre>
        {`message AddPairsProposal {
  string title ;
  string description ;
  repeated Pair pairs ;
}`}
      </pre>

    <h4>Update App Gov Time</h4>
    <p>UpdateGovTimeInAppProposal updated the governance voting time for an app that is used by CosmWasm governance smart contract.</p>
    <pre>
        {`message UpdateGovTimeInAppProposal {
  string title ;
  string description ;
  AppAndGovTime govTime;
}`}
      </pre>

    <h4>Map Asset to App</h4>
    <p>AddAssetInAppProposal maps an asset to an app. The asset can then be minted by that app only through the Tokenmint module.</p>
    <pre>
        {`message AddAssetInAppProposal {
  string title ; 
  string description ;
  repeated AppData app ;
}`}
      </pre>

      <BottomNav
        preNavLink="/comdex-ecosystem"
        prevNavText="The Comdex Ecosystem"
        nextNavLink="/auction"
        nextNavText="Auction"
      />

    </div>
  );
};

export default Asset;