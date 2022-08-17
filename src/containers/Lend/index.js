import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const Lend = () => {
  return (
    <div>
      <h2>Lend</h2>
      <h3>Overview</h3>
      <p>
      Lend module is used for collateralized lending-borrowing of assets on top of  the comdex chain. Any user can deposit their IBC-Assets in a listed cPool and start earning interest on the lent asset. Similarly they can open a borrow position for the lent asset of different IBC-Asset. The module contains transactions to open/close/edit the Lend {"&"} Borrow position. <br />
      If the user fails to maintain proper collateralization ratio, then his borrow position will be liquidated. After liquidation, creation of borrow position for the same pair is restricted and then liquidation and auction are handled by the respective modules.
      </p>
      
      <h4>STATE:</h4>
      <p>1. LendAsset</p>
      <pre>
        {`message LendAsset {
 uint64 lending_id 
 uint64 asset_id 
 uint64 pool_id 
 string owner 
 cosmos.base.v1beta1.Coin amount_in
 google.protobuf.Timestamp lending_time 
 string updated_amount_in
 string available_to_borrow 
 string reward_Accumulated 
 uint64 app_id
 string cpool_name
}`}
      </pre>

      <p>
        An user can come and lend their IBC-Assets in any of the pools according to their choice. The details for a particular asset lend is stored in this struct. Whenever a user deposits any IBC-Asset an equivalent amount of cToken is minted by the module and transferred to the user, which later is used to create a borrow position. Duplicate creation of lent positions for  IBC-Assets are prohibited in a specific pool. Available to borrow denotes the cToken balance of the user which is used to create a borrow position for different pairs available with the lent IBC-Asset in that pool.
      </p>

      <p>1. BorrowAsset:</p>
      <pre>
        {`message BorrowAsset {
 uint64 borrowing_id 
 uint64 lending_id 
 bool is_stable_borrow 
 uint64 pair_id 
 cosmos.base.v1beta1.Coin amount_in
 cosmos.base.v1beta1.Coin amount_out 
 cosmos.base.v1beta1.Coin bridged_asset_amount 
 google.protobuf.Timestamp borrowing_time 
 string stable_borrow_rate 
 string updated_amount_out 
 string interest_Accumulated 
 string cpool_name 
}`}
      </pre>

      <p>
        A borrow position is created using cTokens which are available to borrow for a given lend position. The user first selects the lend position for which he wants to borrow. After selecting the lend position he will have the option to choose pairs from asset_pair_mappings data. The user selects the pair and then enters the cToken he wants to open a borrow position for. The maximum amount that can be borrowed is determined by the LTV of the lend IBC-Asset (from asset_rates_stats data). As soon as the user borrows some  amount Interest starts getting accumulated for his borrow position. Whenever the user closes his position he has to return Amount Borrowed plus the interest accumulated.
      </p>

      <p>1. Pool:</p>
      <pre>
        {`message Pool {
 uint64 pool_id 
 string module_name 
 uint64 main_asset_id 
 uint64 first_bridged_asset_id 
 uint64 second_bridged_asset_id 
 string cpool_name 
 repeated AssetDataPoolMapping asset_data 
}
 
message AssetDataPoolMapping{
 uint64 asset_id 
 bool is_bridged 
}`}
      </pre>
      <p>
        A pool stores all the IBC-Assets in a specific module account. One pool contains One main Asset and two bridged assets. Lend and Borrow operations can be done either on one pool or different pools. In case of cross borrow (lent asset is on one pool and borrowed asset is from different pool) then the first_bridged_asset_id is used as a transition between different pools. Only if there is insufficient liquidity for the transaction from the first bridged asset, then the second bridged asset is used for transition into the second pool. <br />
        The LTV calculations of bridged assets are also taken into consideration while doing a cross borrow. The pools are initially bootstrapped from the fund_module_account transaction.
      </p>

      <p>1. Extended_Pair:</p>
      <pre>
        {`message Extended_Pair {
 uint64 id 
 uint64 asset_in 
 uint64 asset_out 
 bool is_inter_pool 
 uint64 asset_out_pool_id 
 uint64 min_usd_value_left 
}`}
      </pre>
      <p>
        An Extended Pair defines the assetIn and assetOut according to the pools. This is used while creating a borrow transaction. It also has min_usd_value_left which determines the dust calculations in auction.
      </p>

      <p>AssetToPairMapping:</p>
      <pre>
        {`message AssetToPairMapping{
 uint64 asset_id 
 uint64 pool_id 
 repeated uint64 pair_id 
}`}
      </pre>
      <p>
        This maps the asset In ID and Pool ID for a list of pair IDs <br />
        The user can only use the IDs listed if he wants to borrow against a lend position. These info are added through a base governance proposal.
      </p>
      <pre>
        {`message UserLendIdMapping{
 string owner ;
 repeated uint64 lend_ids 
}`}
      </pre>

      <p>This keeps a track of all the lend positions opened by an user.</p>
      <pre>
        {`message LendIdByOwnerAndPoolMapping{
 string owner ;
 uint64 pool_id 
 repeated uint64 lendIds 
}`}
      </pre>

      <p>This keeps a track of all the lend positions opened by a user for a specific pool.</p>
      <pre>
        {`message BorrowIdByOwnerAndPoolMapping{
 string owner ;
 uint64 pool_id 
 repeated uint64 borrowIds 
}`}
      </pre>

      <p>
        This keeps a track of all the borrow positions opened by a user for a specific pool.
      </p>
      <pre>
        {`message UserBorrowIdMapping{
 string owner ;
 repeated uint64 borrow_ids 
}`}
      </pre>

      <p>This keeps a track of all the borrow positions opened by an user.</p>
      <pre>
        {`message LendIdToBorrowIdMapping{
 uint64 lending_id 
 repeated uint64 borrowing_id
 
}`}
      </pre>

      <p>This keeps track of all the borrowing IDs associated with a specific lend ID.</p>
      <pre>
        {`message LendIdToBorrowIdMapping{
 uint64 lending_id 
 repeated uint64 borrowing_id
 
}`}
      </pre>

      <p>1. AssetStats:</p>
      <pre>
        {`message AssetStats{
 uint64 pool_id 
 uint64 asset_id 
 string total_borrowed 
 string total_stable_borrowed 
 string total_lend 
 string lend_apr 
 string borrow_apr 
 string stable_borrow_apr 
 string utilisation_ratio 
}`}
      </pre>
      <p>
        This struct shows the Asset Stats of an IBC-Asset in a particular cPool. <br />
        These are used to show the rates for lending and borrowing for a particular asset in a specific pool.
      </p>

      <p>AssetRatesStats:</p>
      <pre>
        {`message AssetRatesStats{
 uint64 asset_id 
 string u_optimal 
 string base 
 string slope1 
 string slope2 
 bool enable_stable_borrow 
 string stable_base
 string stable_slope1 
 string stable_slope2 
 string ltv 
 string liquidation_threshold 
 string liquidation_penalty 
 string liquidation_bonus 
 string reserve_factor 
 uint64 c_asset_id 
}`}
      </pre>

      <p>Asset Rates Stats stores the relevant constants used for lending and borrowing APR calculations of a particular IBC-Asset.
</p>
<pre>
        {`message AssetRatesStats{
 uint64 asset_id 
 string u_optimal 
 string base 
 string slope1 
 string slope2 
 bool enable_stable_borrow 
 string stable_base
 string stable_slope1 
 string stable_slope2 
 string ltv 
 string liquidation_threshold 
 string liquidation_penalty 
 string liquidation_bonus 
 string reserve_factor 
 uint64 c_asset_id 
}`}
      </pre>

      <p>
        Asset Rates Stats stores the relevant constants used for lending and borrowing APR calculations of a particular IBC-Asset.
      </p>
      <pre>
        {`message LendMapping{
 repeated uint64 lend_ids 
}
 
message BorrowMapping{
 repeated uint64 borrow_ids 
}
 
message StableBorrowMapping{
 repeated uint64 stable_borrow_ids }
`}
      </pre>

      <p>1. ModuleBalance:</p>
      <pre>
        {`message ModuleBalance{
 uint64 pool_id 
 repeated ModuleBalanceStats module_balance_stats
}
 
message ModuleBalanceStats{
 uint64 asset_id
 cosmos.base.v1beta1.Coin balance 
}`}
      </pre>
      <p>Module Balance stores the balance of a particular module account for a particular IBC-Asset</p>

      <p>Auction Params :</p>
      <p>Add Auction Parameters for Lend</p>
      <pre>
        {`message AuctionParams{
  uint64 app_id 
  uint64 auction_duration_seconds 
  string buffer 
  string cusp 
  string step 
  uint64 price_function_type 
  uint64 dutch_id 
  uint64 bid_duration_seconds 
}`}
      </pre>

      <h4>Messages</h4>
      <pre>
        {`message MsgLend {
 string                   lender
 uint64                   asset_id 
 cosmos.base.v1beta1.Coin amount
 uint64                   pool_id 
 uint64                   app_id 
}`}
      </pre>

      <p>MsgLend:</p>
      
      <ol>
        <li>An user can come and create their own Lend Position using MsgLend.</li>
        <li>The user provides the assetID, poolID and the amount. After the tx is complete a new lend position is created for that user with an unique lendID.</li>
        <li>
          A cToken representative of the IBC-Asset is minted and then transferred to the user which denotes the borrowing power/ Available to borrow capacity.
        </li>
        <li>Rewards start to get accumulated on the lent Amount if the lendingApr is above 0 and sent to the user in cToken. Available borrowing is also increased accordingly.</li>
      </ol>

      <pre>
        {`message MsgDeposit {
 string                   lender
 uint64                   lend_id 
 cosmos.base.v1beta1.Coin amount ;
}`}
      </pre>

      <p>MsgDeposit:</p>
      <ol>
        <li>An user can add further IBC-assets to their existing lend position by the Msgdeposit Txn.</li>
        <li>As the tx is done the Amount goes to the respective cPool Module account and the user’s Available to borrow is updated.</li>
        <li>Additional cToken is provided to the user.</li>
      </ol>
      <pre>
        {`message MsgWithdraw {
 string                   lender 
 uint64                   lend_id
 cosmos.base.v1beta1.Coin amount 
}`}
      </pre>

      <p>MsgWithdraw:</p>
      <ol>
        <li>An user can withdraw further IBC-assets to their existing lend position by the Msgdeposit Txn.</li>
        <li>User enters the amount to withdraw and then the equivalent amount of cToken is transferred to the module account of the respective cPool and finally burned.</li>
        <li>Available to borrow is updated accordingly.</li>
        <li>The max amount that can be withdrawn is limited to available to borrow.</li>
      </ol>
      <pre>
        {`message MsgCloseLend {
 string                   lender
 uint64                   lend_id 
}`}
      </pre>

      <p>MsgCloseLend:</p>
      <ol>
        <li>The user Inputs the lendID, AmountIn(in terms of cToken), AmoutOut(in terms of IBC-Asset), pairId and Stable Borrow check.</li>
        <li>If all the criteria are satisfied then a new borrow position is created.</li>
        <li>Lend to borrow mapping is updated and Available to borrow is reduced by the amountIn token amount.</li>
        <li>Interest starts to get accumulated for the borrowed position for the borrowed amount.</li>
      </ol>
      <pre>
        {`message MsgRepay {
 string                   borrower;
 uint64                   borrow_id;
 cosmos.base.v1beta1.Coin amount ;
}`}
      </pre>

      <p>MsgRepay:</p>
      <ol>
        <li>An User can Repay the Borrowed Amount by using MsgRepay txn.</li>
        <li>However the user can’t close the lend position by Msgrepay Txn.</li>
        <li>After Repayment, the total borrowed is updated.</li>
        <li>Whenever a user repays, first his interest is settled and then the borrowed amount is reduced.</li>
      </ol>
      <pre>
        {`message MsgDepositBorrow {
 string                   borrower;
 uint64                   borrow_id;
 cosmos.base.v1beta1.Coin amount ;
}`}
      </pre>

      <p>MsgDepositBorrow:</p>
      <ol>
        <li>This Txn is similar to Msg Deposit. </li>
        <li>Here an user can deposit an additional amount of cToken to his borrowed position to maintain the collateralization ratio.</li>
        <li>AmountIn is updated after the txn is done.</li>
        <li>Available to borrow is also updated after the txn is done.</li>
      </ol>
      <pre>
        {`message MsgDraw {
 string                   borrower 
 uint64                   borrow_id
 cosmos.base.v1beta1.Coin amount 
}`}
      </pre>

      <p>MsgDraw:</p>
      <ol>
        <li>If a user wants to take out further IBC-Asset from his borrow position maintaining the collateralization ratio, then this txn is used.</li>
        <li>Additional IBC-Assets are given to the user from the cPool moduleAccount.</li>
        <li>The Borrow position is updated accordingly.</li>
      </ol>
      <pre>
        {`message MsgCloseBorrow {
 string                   borrower ;
 uint64                   borrow_id ;
}`}
      </pre>

      <p>MsgCloseBorrow:</p>
      <ol>
        <li>This txn is similar to the MsgCloseLend Txn.</li>
        <li>The updated IBC-Asset Amount is taken from the user’s account (amount out + interest accumulated on that) and sent to the cPool module account.</li>
        <li>The cTokens are sent back to the user’s account.</li>
        <li>The borrow Position is deleted from the KV Store and also Available to Borrow is updated.</li>
        <li>If the user doesn't have sufficient funds then the txn fails.</li>
      </ol>
      <pre>
        {`message MsgBorrowAlternate {
 string                   lender ;
 uint64                   asset_id ;
 uint64                   pool_id ;
 cosmos.base.v1beta1.Coin amount_in ;
 uint64                   pair_id ;
 bool                     is_stable_borrow ;
 cosmos.base.v1beta1.Coin amount_out ;
 uint64                   app_id ;
}`}
      </pre>

      <p>MsgBorrowAlternate:</p>
      <ol>
        <li>This txn is a combination of lend and borrow.</li>
        <li>The user can create a borrow position directly by lending the IBC-Assets using the lend position.</li>
        <li>The lent IBC-Assets are converted to corresponding cAssets and using them as the deposit token a borrow position is opened. </li>
        <li>The user can edit their lend and borrow position individually thereafter.</li>
      </ol>
      <pre>
        {`message MsgFundModuleAccounts {
 string                   moduleName;
 uint64                   assetId;
 string                   lender;
 cosmos.base.v1beta1.Coin amount ;
}`}
      </pre>

      <p>MsgFundModuleAccounts:</p>
      <ol>
        <li>This txn is used to fund the cPools Module Account to bootstrap the liquidity for the protocol.</li>
        <li>AssetId, cPool Module name and Amount is provided by the user. After the txn the specified amount is sent to the moduleAccount from the user’s account.</li>
      </ol>

      <BottomNav
        preNavLink="/esm"
        prevNavText="ESM"
        nextNavLink="/liquidation"
        nextNavText="Liquidation"
      />

    </div>
  );
};

export default Lend;