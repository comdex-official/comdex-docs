import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const Market = () => {
  return (
    <div>
      <h2>Market</h2>
      <h3>Overview</h3>
      <p>
        Market module sets the price fetched by Bandoracle module into the market module. After the price being set all the modules fetch the price using this module.
      </p>

      <h4>Messages:</h4>
      <pre>
        {`message Market {
 string symbol 
 uint64 script_id 
 uint64 rates
}`}
      </pre>

      <p>A Market is a struct that adds the latest price fetched from the oracles to a particular asset and the oracle script Id used to bring the price.</p>

      <BottomNav
        preNavLink="/locker"
        prevNavText="Locker"
        nextNavLink="/rewards"
        nextNavText="Rewards"
      />

    </div>
  );
};

export default Market;