import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const Vault = () => {
  return (
    <div>
      <h2>Vault</h2>
      <h3>Overview</h3>
      <p>
        The Vault module holds the functionality to create / manage the CDP vaults users .The CDP vault creates an asset by locking up another listed asset as collateral.
      </p>
      <p>The prices of assets are tracked from oracles like Band Protocol.</p>
      <p>
        A liquidation event is triggered when the collateralization ratio of the position falls below the minimum threshold value (Liquidation Ratio) for a cAsset.
      </p>
      <p>Collateralization Ratio = (Value of collaterals locked up)/(Value of borrowed assets)</p>
      <p>
        The Module also offers Stable Mint functionality which is a global common vault for all users where the users can deposit / withdraw collateral for a  borrowed asset at 1 : 1 ratio. 
      </p>

      <h3>State</h3>
      <h4>Vault</h4>
      <p>A Vault represents a debt position owned by an address. It has a collateral type and records the debt that has been drawn and how much fees should be repaid.</p>

      <p>Only the owner can draw or repay the debt, but anyone can deposit collateral to a Vault. Deposits are scoped per address and are recorded separately in Deposit types. 
        <br />
        Depositors can withdraw their collateral provided it does not put the Vault below the liquidation ratio</p>

      <pre>
        {`message Vault {
  uint64 id 
  uint64 app_id
  uint64 extended_pair_vault_id 
  string owner 
  string amount_in 
  string amount_out 
  google.protobuf.Timestamp created_at 
  string interest_accumulated 
  string closing_fee_accumulated 
}`}
      </pre>

      <h3>StableMint</h3>
      <p>A special type of global , ownerless vault for a vault type. The debt issued against the collateral is 1 : 1 in ratio of their dollar value .</p>
      <pre>
        {`message StableMintVault {
 				uint64 id 
 				string amount_in 
 				string amount_out
 				uint64 app_id 
 				uint64 extended_pair_vault_id }`}
      </pre>

      <h3>User Vault Map</h3>

      <p>Maintenance of Owner vault’s information across various apps .</p>
      <pre>
        {`message UserVaultAssetMapping {
 string owner 
 repeated VaultToAppMapping  user_vault_app }
 
message VaultToAppMapping {
 uint64 app_id = 1;
 repeated ExtendedPairToVaultMapping user_extended_pair_vault }
 
message ExtendedPairToVaultMapping {
 uint64 extended_pair_id 
 uint64 vault_id 
}`}
      </pre>

      <h3>App Vault Map</h3>
      <p>Maintains vault global info across apps.</p>
      <pre>
        {`message AppExtendedPairVaultMapping {
 uint64 app_id 
 uint64 counter = 2;
 repeated ExtendedPairVaultMapping extended_pair_vaults }
 
message ExtendedPairVaultMapping
{
 uint64 extended_pair_id 
 repeated uint64 vault_ids 
 string token_minted_amount
 string collateral_locked_amount}`}
      </pre>

      <h3>Messages:</h3>
      <p>
        Users can create a vault for an app and extended_pair_vault_ id with an initial amount_in (collateral) and amount_out(debt) .
      </p>
      <pre>{`message MsgCreateRequest {
  string from  
  uint64 app_id   
  uint64 extended_pair_vault_id 
  string amount_in 
  string amount_out 
}`}</pre>

      <p>Vault owners can deposit extra collateral which inturn increases vault collateralization ratio.</p>
      <pre>
        {`message MsgDepositRequest {
  string from 
  uint64 app_id  
  uint64 extended_pair_vault_id 
  uint64 user_vault_id 
  string amount 
}`}
      </pre>

      <p>Vault owners can withdraw their collateral from the vault.</p>
      <pre>
        {`message MsgWithdrawRequest {
  string from 
  uint64 app_id  
  uint64 extended_pair_vault_id 
  uint64 user_vault_id  
  string amount 
}`}
      </pre>
      <p>Get more borrowed asset from the vault</p>
      <pre>
        {`message MsgDrawRequest {
  string from 
  uint64 app_id   
  uint64 extended_pair_vault_id 
  uint64 user_vault_id  
  string amount 
}`}
      </pre>
      <p>Vault owners can repay their debt which will increase the collateralization ratio</p>
      <pre>
        {`message MsgRepayRequest {
  string from 
  uint64 app_id  
  uint64 extended_pair_vault_id 
  uint64 user_vault_id  
  string amount 
}`}
      </pre>
      <p>Vault owner can close the vault by paying the entire debt</p>
      <pre>
        {`message MsgCloseRequest {
  string from 
  uint64 app_id   
  uint64 extended_pair_vault_id 
  uint64 user_vault_id  
}`}
      </pre>
      <p>Create Stable Mint Vault by depositing a stable token and then minting other stable token</p>
      <pre>
        {`message MsgCreateStableMintRequest {
  string from  
  uint64 app_id  
  uint64 extended_pair_vault_id 
  string amount 
}`}
      </pre>
      <p>Users can deposit the collateral to mint the borrowed asset at 1:1 ratio.</p>
      <pre>
        {`message MsgDepositStableMintRequest {
  string from  
  uint64 app_id   
  uint64 extended_pair_vault_id 
  string amount 
  uint64 stable_vault_id  
}`}
      </pre>
      <p>Users can withdraw their collateral by burning the borrowed asset at 1:1 ratio.</p>
      <pre>
        {`message MsgWithdrawStableMintRequest {
  string from  
  uint64 app_id  
  uint64 extended_pair_vault_id ;
  string amount 
  uint64 stable_vault_id  
}`}
      </pre>
      <BottomNav
        preNavLink="/tokenmint"
        prevNavText="Tokenmint"
        nextNavLink="/build-dapp"
        nextNavText="Build dApp on comdex"
      />

    </div>
  );
};

export default Vault;