import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const Tokenmint = () => {
  return (
    <div>
      <h2>Tokenmint</h2>
      <h3>Overview</h3>
      <p>
        Tokenmint module lets apps create their own tokens with a genesis supply . An app that wished to create their own governance token can create the same via this module.Only one covernance token can exist for an app whereas multiple non governance token can exist for a app. Tokenmint is solely  responsible for minting and burning these tokens .
      </p>
      <h3>STATE:</h3>
      <p>TokenMint: Keeps track of genesis and current supply of token minted through an app.</p>
      <pre>
        {`message TokenMint{
  uint64 app_id
   repeated MintedTokens minted_tokens
  
}

message MintedTokens{
    uint64 asset_id
    string genesis_supply 
  google.protobuf.Timestamp created_at
  string current_supply 
}`}
      </pre>

      <h3>MESSAGES:</h3>
      <p>The recipient mapped in MintGenesisToken(Asset Module) can mint the genesis token to its address</p>
      <pre>
        {`message MsgMintNewTokensRequest {
   string from  
   uint64 app_id  
   uint64 asset_id }.
`}
      </pre>
      <BottomNav
        preNavLink="/rewards"
        prevNavText="Rewards"
        nextNavLink="/vault"
        nextNavText="Vault"
      />

    </div>
  );
};

export default Tokenmint;