import { Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { BottomNav } from "../../components/common";
import { mainnetIbcChannels } from "./data";
import "./index.less";

const columns = [
  {
    title: 'Source Channel',
    dataIndex: 'source_channel',
    key: 'source_channel ',
  },
  {
    title: 'Destination Chain',
    dataIndex: 'destination_chain',
    key: 'destination_chain',
  },
  {
    title: 'Destination Chain -id',
    dataIndex: 'destination_chainid',
    key: 'destination_chainid',
  },
  {
    title: 'Destination Channel',
    dataIndex: 'destination_channel',
    key: 'destination_channel',
  },
  {
    title: 'Known Operators',
    dataIndex: 'known_operators',
    key: 'known_operators',
    width: 280
  },
];

const Mainnet = () => {
  return (
    <div>
      <h2 className="mb-1">IBC Channels</h2>
      <h3>Mainnet IBC channels for comdex-1</h3>
      <p>
        Note: <span className="text-muted">Raise a PR on</span> <Link to={{ pathname: "https://github.com/comdex-official/comdex-docs/blob/relayers-pages/src/docs/README.md" }} target="_blank">Github</Link>
      </p>
      
      <Table dataSource={mainnetIbcChannels} columns={columns} bordered pagination={false} scroll={{ y: 'calc(100vh - 480px)' }} />

      <BottomNav
        preNavLink="/local-node-setup"
        prevNavText="Local Node Setup"
        nextNavLink="/ibc-testnet"
        nextNavText="Testnet IBC channels for comdex-test2"
      />

    </div>
  );
};

export default Mainnet;