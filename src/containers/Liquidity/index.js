import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const Liquidity = () => {
  return (
    <div>
      <h2>Liquidity</h2>
      <h3>Overview</h3>
      <p>
        The liquidity module is responsible for all the AMM, OrderBook, and Farming Activities. This module implements all the basic features like PairCreation, PoolCreation, AddLiquidity(Deposit), RemoveLiquidity(withdraw),  limitOrder, MarketOrder, CancelOrders, Farming, and Unfarming. Multiple applications (apps created using asset module) can leverage the functionality of this module.
      </p>
      
      <h4>STATE:</h4>
      <p>
        1. <b>Params</b> - Params stores the global parameters of the liquidity module, these are the parameters that are used regardless of which app (appID)  is being served.
      </p>
      <b>message Params {}</b>

      <p>
        2. <b>GenericParams</b> - GenericParams stores all the parameters used by a specific app, these parameters can be modified by the proposal raised by the gov module via <b>submit-proposal liquidity-param-change.</b> These parameters are basic configurations for the app in the liquidity module. Genericparams are automatically created for the app after its successful registration. <br />
        <b>Note</b> - App is created via asset module, Please refer <b>x/Asset</b> for more info about the same.
      </p>
      <pre>
        {`message GenericParams {
   uint64 batch_size
   uint64 tick_precision
   string fee_collector_address
   string dust_collector_address
   string min_initial_pool_coin_supply (customtype)="github.com/cosmos/cosmos-sdk/types.Int"
   repeated cosmos.base.v1beta1.Coin pair_creation_fee
   repeated cosmos.base.v1beta1.Coin pool_creation_fee 
   string min_initial_deposit_amount (customtype)="github.com/cosmos/cosmos-sdk/types.Int"
   string max_price_limit_ratio (customtype)="github.com/cosmos/cosmos-sdk/types.Dec"
   google.protobuf.Duration max_order_lifespan
   string swap_fee_rate (customtype)="github.com/cosmos/cosmos-sdk/types.Dec"
   string withdraw_fee_rate (customtype)="github.com/cosmos/cosmos-sdk/types.Dec"
   uint64 deposit_extra_gas (customtype)="github.com/cosmos/cosmos-sdk/types.Gas"
   uint64 withdraw_extra_gas (customtype)="github.com/cosmos/cosmos-sdk/types.Gas"
   uint64 order_extra_gas (customtype)="github.com/cosmos/cosmos-sdk/types.Gas"
   string swap_fee_distr_denom
   string swap_fee_burn_rate (customtype)="github.com/cosmos/cosmos-sdk/types.Dec"
   uint64 app_id
 }`}
      </pre>

      <p>
        3. <b>Pair</b> - Pair stores the details about the specific trading pair for AMM and the traditional order book. Every Pair is unique. These are used for pool creation and order books for limit and market orders. Every pair has its own unique escrow_address which holds the funds until the requests (order requests) get executed.
      </p>
      <pre>
        {`message Pair {
   uint64 id
   string base_coin_denom
   string quote_coin_denom
   string escrow_address
   uint64 last_order_id
   string last_price (customtype)="github.com/cosmos/cosmos-sdk/types.Dec"
   uint64 current_batch_id
   string swap_fee_collector_address
   uint64 app_id
 }`}
      </pre>

      <p>
        4. <b>Pool</b> - The pool stores the details about liquidity pools, each pool is unique. A pool cannot be created again with a given pair_id if it already exists in the state. Every pool has its own reserve address which holds the funds provided by liquidity providers.
      </p>

      <pre>
        {`message Pool {
   uint64 id
   uint64 pair_id
   string reserve_address
   string pool_coin_denom
   uint64 last_deposit_request_id
   uint64 last_withdraw_request_id
   bool disabled
   uint64 app_id
 }`}
      </pre>

      <p>5. <b>Deposit Request</b> - Requests made to add liquidity in pools are being stored in the DepositRequest state, once the request is executed it gets deleted. These requests are being executed batch-wise.</p>
      <pre>
        {`message DepositRequest {
   uint64 id
   uint64 pool_id
   int64 msg_height
   string depositor
   repeated cosmos.base.v1beta1.Coin deposit_coins
   repeated cosmos.base.v1beta1.Coin accepted_coins
   cosmos.base.v1beta1.Coin minted_pool_coin
   RequestStatus status
   uint64 app_id
 }`}
      </pre>

      <p>6. <b>Withdraw Request</b> - Requests made to remove liquidity from pools are being stored in the WithdrawRequest state, once the request is executed it gets deleted. These requests are being executed batch-wise.</p>
      <pre>
        {`message WithdrawRequest {
   uint64 id
   uint64 pool_id
   int64 msg_height
   string withdrawer
   cosmos.base.v1beta1.Coin pool_coin
   repeated cosmos.base.v1beta1.Coin withdrawn_coins
   RequestStatus status
   uint64 app_id
 }`}
      </pre>

      <p>7. <b>Order</b> - Every request made for trading is stored in this order state, it stays until it gets fully executed, or canceled, or until it is expired.</p>
      <pre>
        {`message Order {
   uint64 id
   uint64 pair_id
   int64 msg_height
   string orderer
   OrderDirection direction
   cosmos.base.v1beta1.Coin offer_coin
   cosmos.base.v1beta1.Coin remaining_offer_coin
   cosmos.base.v1beta1.Coin received_coin
   string price (customtype)="github.com/cosmos/cosmos-sdk/types.Dec"
   string amount (customtype)="github.com/cosmos/cosmos-sdk/types.Int"
   string open_amount (customtype)="github.com/cosmos/cosmos-sdk/types.Int"
   uint64 batch_id
   google.protobuf.Timestamp expire_at
   OrderStatus status
   uint64 app_id
 }`}
      </pre>

      <p>8. <b>Active Farmer</b> - The addresses in this state are eligible to receive the farming rewards (swap-fee, internal, external incentivization). Farmed_pool_coin determines the reward ratio of the farmer while rewards calculations.</p>
      <pre>
        {`message ActiveFarmer{
   uint64 app_id
   uint64 pool_id
   string farmer
   cosmos.base.v1beta1.Coin farmed_pool_coin
 }`}
      </pre>

      <p>9. <b>QueuedFarmer</b> - After farming a farmer stays in this state for one epoch (minimum of all available liquidity epoch types). Once the epoch duration is satisfied for the farmer, this state gets deleted and it is moved into the <b>ActiveFarmer</b> state.</p>
      <pre>
        {`message QueuedCoin{
   cosmos.base.v1beta1.Coin farmed_pool_coin
   google.protobuf.Timestamp created_at
 }
message QueuedFarmer{
   uint64 app_id
   uint64 pool_id
   string farmer
   repeated QueuedCoin queud_coins
 }`}
      </pre>

      <h3>STATUS:</h3>
      <p>1. <b>Request Status</b> - These are not states but they are used in other states which are mentioned further. It can be changed for specific requests throughout their life cycle.</p>
      <pre>
        {`enum RequestStatus {
   REQUEST_STATUS_UNSPECIFIED (customname)="RequestStatusUnspecified"
   REQUEST_STATUS_NOT_EXECUTED (customname)="RequestStatusNotExecuted"
   REQUEST_STATUS_SUCCEEDED (customname)="RequestStatusSucceeded"
   REQUEST_STATUS_FAILED (customname)="RequestStatusFailed"
 }`}
      </pre>

      <p>
        2. <b>Order Status</b> - These are not states but they are used in other states which are mentioned further. A single order can have different order statuses depending on the actions being performed on it throughout the life cycle.
      </p>
      <pre>
        {`enum OrderStatus {
   ORDER_STATUS_UNSPECIFIED (customname)="OrderStatusUnspecified"
   ORDER_STATUS_NOT_EXECUTED (customname)="OrderStatusNotExecuted"
   ORDER_STATUS_NOT_MATCHED (customname)="OrderStatusNotMatched"
   ORDER_STATUS_PARTIALLY_MATCHED (customname)="OrderStatusPartiallyMatched"
   ORDER_STATUS_COMPLETED (customname)="OrderStatusCompleted"
   ORDER_STATUS_CANCELED (customname)="OrderStatusCanceled"
   ORDER_STATUS_EXPIRED (customname)="OrderStatusExpired"
 }`}
      </pre>

      <p>
        3. <b>Order Direction</b> - These are not states but they are used in other states which are mentioned further. Different actions are performed in order depending on the direction of it.
      </p>
      <pre>
        {`enum OrderDirection {
   ORDER_DIRECTION_UNSPECIFIED (customname)="OrderDirectionUnspecified"
   ORDER_DIRECTION_BUY (customname)="OrderDirectionBuy"
   ORDER_DIRECTION_SELL (customname)="OrderDirectionSell"
 }`}
      </pre>

      <h3>MESSAGES :</h3>
      <p>
        1. <b>MsgCreatePair</b> - Create a pair (market) for trading A Pair can be created in two ways,
      </p>
      <p>a. Permission Less - A certain amount of fees need to be paid for creating pair. The fee paid is non-refundable. A pair can be launched instantly with this method.</p>

      <p>Eg. CLI command - <br />
      comdex tx liquidity create-pair [app-id] [base-coin-denom] [quote-coin-denom] –from wallet –chain-id comdex-1 –node domain.com:port</p>
      <pre>
        {`message MsgCreatePair {
  string creator
  string base_coin_denom
  string quote_coin_denom
  uint64 app_id
 }`}
      </pre>

      <p>b. Governance - A proposal needs to be raised for creating pair via the governance module.  </p>
      <p>Eg. CLI command - <br />
      comdex tx gov submit-proposal create-liquidity-pair [app-id] [base-coin-denom] [quote-coin-denom] –from wallet –chain-id comdex-1 –node domain.com:port</p>
      <p>NOTE - Method (a) has been currently disabled, it will be enabled in future upgrades.  </p>
      <p>
        A pair consists of a base coin and a quote coin and you can think of a pair in an order book. An orderer can request a limit or market order once a pair is created <br />
        For creating a new pair, demons mentioned in base_coin_denom and quote_coin_denom should be allowed by the asset module. <br />
        Pair can be created only with the demons that exist/are whitelisted in the asset module. For more info about the same please refer to the x/Asset section in this doc.
      </p>
      <ul>
        <li>
          Validation checks that are being done before running pair creation logic -
          <ul>
            <li>Check that app_id is valid and that an app with this ID exists in the asset module.</li>
            <li>Check that base_coin_denom is valid and exists in the asset module.</li>
            <li>Check that quote_coin_denom is valid and exists in the asset module.</li>
            <li>Check that pair isn’t already existed with the given <b>app_id, base_coin_denom, and quote_coin_denom</b></li>
          </ul>
        </li>
        <li>
          Transfers the pair creation fee from the creator account to the fee collector address of the app. 
        </li>
        <li>
          Create a new Pair with existing + 1.
        </li>
      </ul>

      <p>
        1. <b>MsgCreatePool</b> - Create a liquidity pool in the existing pair.
      </p>
      <p>Pool(s) belong to a pair. Therefore, a pair must exist in order to create a pool <br />
        For pool creation, a certain amount of fees needs to be paid (default 200 CMDX). Each pool is unique. At the initial creation of the pool, a fixed amount of max(deposit_coins.Amount) pool tokens is minted and sent to the creator of the pool’s account. The pool coin denom is in the form of <b>{`pool{app_id}-{pool_id}`}</b>. 
      </p>
      <p>Eg. CLI command - </p>
      <p>comdex tx liquidityV1 create-pool [app-id] [pair-id] [deposit-coins] –from wallet –chain-id comdex-1 –node domain.com:port</p>
      <pre>
        {`message MsgCreatePool {
   string creator
   uint64 pair_id
   repeated cosmos.base.v1beta1.Coin deposit_coins
   uint64 app_id
 }
`}
      </pre>

      <ul>
        <li>
          Validation checks that are being done before running pool creation logic -
          <ul>
            <li>Check that app_id is valid and that the app with this ID exists in the asset module.</li>
            <li>Check that pair_id is valid and pair_id and there exists a pair for it.</li>
            <li>Check that param exists for the given app_id, if not then the error is returned.</li>
            <li>Check that denoms of the coins in deposit_coins match with the pair’s base_coin_denom and quote_coin_denom.</li>
            <li>Check that deposit coins are {'>='} minimum initial deposit amount</li>
            <li>Check that the pool with the same pair_id doesn't already exist.</li>
          </ul>
        </li>
        <li>Create and save the new pool with ID as existingPoolID + 1</li>
        <li>Transfer deposit coins from the creator’s account to the pool reserve address.</li>
        <li>Transfer pool creation fee from creator’s account to app’s fee collector address</li>
        <li>Mint new pool tokens and transfer them to the creator’s account.</li>
        <li>Create a new gauge in the rewards module for swap fee distribution. </li>
      </ul>

      <p>
        <b>2. MsgDeposit</b> - Deposit coins to a liquidity pool. Deposit uses a batch execution methodology. 
      </p>
      <p>
        Deposit requests are accumulated in a batch for a predefined period (default is 1 block) and they are executed at the end of the batch. A minimum deposit amount is 1000000 for each denomination. <br />
        Note that in an order book system, a pool is considered an order. Liquidity in the pool places orders conservatively. What that means is that it places buy orders lower than the pool price and places sell orders higher than the pool price.
      </p>
      <p>Eg. CLI command - </p>
      <p>comdex tx liquidityV1 deposit [app-id] [pool-id] [deposit-coins] –from wallet –chain-id comdex-1 –node domain.com:port</p>
      <pre>
        {`message MsgDeposit {
   string depositor
   uint64 pool_id
   repeated cosmos.base.v1beta1.Coin deposit_coins 
   uint64 app_id
 }`}
      </pre>

      <ul>
        <li>
          Validation checks that are being done before running deposit logic -
          <ul>
            <li>Check that app_id is valid and that the app with this ID exists in the asset module.</li>
            <li>Check that pool_id is valid and the pool exists with the given pool_id and is not disabled.</li>
            <li>Check that deposit coins are valid and their denom matches with the denoms of a pair in the pool.</li>
          </ul>
        </li>
        <li>Transfer deposit coins from depositor account to module’s global escrow address.</li>
        <li>Create a new deposit request with ID as  existingDepositRequest+1</li>
      </ul>

      <p><b>3. MsgWithdraw</b> - Withdraw coins from the liquidity pool. </p>
      <p>Withdraw uses a batch execution methodology. Withdraw requests are accumulated in a batch for a predefined period (default is 1 block) and they are executed at the end of the batch.</p>
      <p>Eg. CLI command - </p>
      <p>comdex tx liquidityV1 withdraw [app-id] [pool-id] [pool-coin] –from wallet –chain-id comdex-1 –node domain.com:port</p>
      <pre>
        {`message MsgWithdraw {
   string withdrawer
   uint64 pool_id
   cosmos.base.v1beta1.Coin pool_coin
   uint64 app_id
 }
`}
      </pre>
      <ul>
        <li>
          Validation checks that are being done before running withdraw logic -
          <ul>
            <li>Check that app_id is valid and the app with this ID exists in the asset module.</li>
            <li>Check that pool_id is valid and the pool exists with the given pool_id and is not disabled.</li>
            <li>Check that pool_coins denom are equal to the pool denom.</li>
          </ul>
        </li>
        <li>Transfer pool coins from withdrawal account to module’s global escrow address.</li>
        <li>Create a new withdraw request with ID as existingWithdrawRequest+1</li>
      </ul>

      <p><b>4. MsgLimitOrder</b> - Make a limit order. </p>
      <p>The buy limit order will be matched at lower than or equal to the defined order price whereas the sell limit order will be matched at higher than or equal to the defined order price. <br />
      The order uses a batch execution methodology. Order requests are accumulated in a batch for a predefined period (default is 1 block) and they are executed at the end of the batch.
      </p>

      <p>Eg. CLI command - </p>
      <p>comdex tx liquidityV1 limit-order [app-id] [pair-id] [direction] [offer-coin] [demand-coin-denom] [price] [amount] –from wallet –chain-id comdex-1 –node domain.com:port</p>
      <pre>
        {`message MsgLimitOrder {
   string orderer
   uint64 pair_id
   OrderDirection direction
   cosmos.base.v1beta1.Coin offer_coin
   string demand_coin_denom
   string price (customtype)="github.com/cosmos/cosmos-sdk/types.Dec"
   string amount (customtype)="github.com/cosmos/cosmos-sdk/types.Int"
   google.protobuf.Duration order_lifespan
   uint64 app_id
 }`}
      </pre>
    
      <ul>
        <li>
          Validation checks that are being done before running limit order logic -
          <ul>
            <li>Check that param exists for the given app_id, if not then the error is returned.</li>
            <li>Check that app_id is valid and that an app with this ID exists in the asset module.</li>
            <li>Check that order_lifespan isn’t greater than max order lifespan.</li>
            <li>Check that pair_id is valid and pair_id and there exists a pair for it.</li>
            <li>Check that offer_coin is sufficient for the demanding coin for the given price and amount including the calculated swap fee based on the direction of order (buy/sell).</li>
            <li>Check that order isn’t too small</li>
          </ul>
        </li>
        <li>Transfer calculated offer coin from the orderer's account to the pair's escrow address.</li>
        <li>Create new order with ID as existing orderID+1 </li>
      </ul>

      <p><b>5. MsgMarketOrder</b> - Make a market order.</p>
      <p>Unlike a limit order, there is no need to input the order price. <br />
        Buy market order uses MaxPriceLimitRatio of the list price, which is LastPrice * (1+MaxPriceLimitRatio). <br />
        Sell market order uses negative MaxPriceLimitRatio of the last price, which is LastPrice * (1-MaxPriceLimitRatio). <br />
        The order uses a batch execution methodology. Order requests are accumulated in a batch for a predefined period (default is 1 block) and they are executed at the end of the batch.
      </p>

      <p>
        Eg. CLI command - <br />
        comdex tx liquidityV1 market-order [app-id] [pair-id] [direction] [offer-coin] [demand-coin-denom] [amount]  –from wallet –chain-id comdex-1 –node domain.com:port 
      </p>
      <pre>
        {`message MsgMarketOrder {
   string orderer
   uint64 pair_id
   OrderDirection direction
   cosmos.base.v1beta1.Coin offer_coin
   string demand_coin_denom
   string amount (customtype)="github.com/cosmos/cosmos-sdk/types.Int"
   google.protobuf.Duration order_lifespan
   
   uint64 app_id
 }`}
      </pre>
      <ul>
        <li>Validation checks that are being done before running market order logic -
          <ul>
            <li>Check that param exists for the given app_id, if not then the error is returned.</li>
            <li>Check that app_id is valid and an app with this ID exists in the asset module.</li>
            <li>Check that order_lifespan isn’t greater than max order lifespan.</li>
            <li>Check that pair_id is valid and pair_id and there exists a pair for it.</li>
            <li>Check that offer_coin is sufficient for the demanding coin for the given amount including the calculated swap fee based on the direction of order (buy/sell).</li>
            <li>Check that order isn’t too small</li>
          </ul>
        </li>
        <li>Transfer calculated offer coin from the orderer's account to the pair's escrow address.</li>
        <li>Create new order with ID as existing orderID+1 </li>
      </ul>

      <p><b>6. MsgCancelOrder</b> - Cancel an order.</p>
      <p>
        Eg. CLI command - <br />
        comdex tx liquidityV1 cancel-order [app-id] [pair-id] [order-id]  –from wallet –chain-id comdex-1 –node domain.com:port  
      </p>
      <pre>
        {`message MsgCancelOrder {
   string orderer
   uint64 pair_id
   uint64 order_id
   uint64 app_id
 }`}
      </pre>
      <ul>
        <li>
          Validation checks that are being done before running cancel order logic -
          <ul>
            <li>Check that app_id is valid and that an app with this ID exists in the asset module.</li>
            <li>Check that order_id is valid and that order exists with the given order_id.</li>
            <li>Check that the orderer is the same as the order request creator.</li>
            <li>Check that the order with the given ID is not already canceled.</li>
            <li>Check that the order batch ID and pair’s current batch ID are not the same.</li>
          </ul>
        </li>
        <li>Check if the order is not already completed.</li>
        <li>If the remaining offer coin is positive, the following conditions are checked actions are performed accordingly-
          <ul>
            <li>If the remaining offer coin is the same as offered coin -
              <ul>
                <li>Refund the full amount to the order including the swap fee collected amount.</li>
              </ul>
            </li>
            <li>Recalculate the swap fee for swapped amount i.e (swapped amount = offer coin - remaining_offercoin)</li>
            <li>Refund the remaining amount + excess collected swap_fee back to the orderer</li>
            <li>Transfer accumulated swap fee amount from pair’s escrow address to pair’s swap fee collector address</li>
          </ul>
        </li>
        <li>Set order status as canceled</li>
      </ul>

      <p>7. MsgCancelAllOrders - Cancel all orders.</p>
      <p>
        Eg. CLI command - <br />
        comdex tx liquidityV1 cancel-all-orders [app-id] [pair-ids] –from wallet –chain-id comdex-1 –node domain.com:port 
      </p>
      <pre>
        {`message MsgCancelAllOrders {
   string orderer
   uint64 pair_id
   uint64 app_id
 }
`}
      </pre>
      <ul>
        <li>
          Validation checks that are being done before running cancel order logic -
          <ul>
            <li>Check that app_id is valid and an app with this ID exists in the asset module.</li>
          </ul>
        </li>
        <li>Get all the orders of the order from the given pair ID.</li>
        <li>Same actions are performed on each order as of cancel single order</li>
      </ul>
      
      <p><b>8. MsgFarm</b> - Farm pool tokens to receive farming rewards.</p>
      <p>
        Eg. CLI command - <br />
        comdex tx liquidityV1 farm [app-id] [pool-id] [pool-coin] –from wallet –chain-id comdex-1 –node domain.com:port  
      </p>
      <pre>
        {`message MsgFarm {
   uint64 app_id   
   uint64 pool_id
   string farmer
   cosmos.base.v1beta1.Coin farming_pool_coin
 }`}
      </pre>
      <ul>
        <li>
          Validation checks that are being done before running farm logic -
          <ul>
            <li>Check that the depositor address is a valid Bech32 address string.</li>
            <li>Check that app_id is valid and that an app with this ID exists in the asset module.</li>
            <li>Check that pool_id is valid and the pool exists with the given pool_id and is not disabled.</li>
            <li>Check that farming_pool_coin.denom is equal to the given pool_id’s pool denom.</li>
          </ul>
        </li>
        <li>Transfer pool tokens from farmer’s account to liquidity modules’ account.</li>
        <li>Create a new queued farmer position with the current timestamp and store it.</li>
      </ul>

      <p><b>9. MsgUnfarm</b> - Unfarm pool token from the network</p>
      <p>
        Eg. CLI command - <br />
        comdex tx liquidityV1 unfarm [app-id] [pool-id] [pool-coin] –from wallet –chain-id comdex-1 –node domain.com:port  
      </p>
      <pre>
        {`message MsgUnfarm {
   uint64 app_id   
   uint64 pool_id
   string farmer
   cosmos.base.v1beta1.Coin unfarming_pool_coin
 }`}
      </pre>
      <ul>
        <li>
          Validation checks that are being done before running unfarmlogic -
          <ul>
            <li>Check that the farmer's address is a valid Bech32 address string.</li>
            <li>Check that app_id is valid and that an app with this ID exists in the asset module.</li>
            <li>Check that pool_id is valid and the pool exists with the given pool_id and is not disabled.</li>
            <li>Check that unfarming_pool_coin.denom is equal to the given pool_id’s pool denom.</li>
          </ul>
        </li>
        <li>Check that pool tokens are already farmed for the given farmer.</li>
        <li>Check that available farmed tokens (queued farm position + active farming position) {'>='} unfarming_pool_coin</li>
        <li>Delete the queued farming position if queued coins are less than equal to unfarming_pool_coin, else update the queued farming position i.e (queued-coins = queued-coins - soft_unlock_coin). </li>
        <li>If queued coins are not sufficient enough for the unfarming_pool_coin coins then queued farming position is deleted after fulfilling a partial amount of unfarming_pool_coin and the remaining coins are being deducted from the active farming position of a farmer.</li>
      </ul>
      <BottomNav
        preNavLink="/liquidation"
        prevNavText="Liquidation"
        nextNavLink="/locker"
        nextNavText="Locker"
      />

    </div>
  );
};

export default Liquidity;