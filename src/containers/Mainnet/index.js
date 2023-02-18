import { Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { BottomNav } from "../../components/common";
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

const dataSource = [
  {
    key: '1',
    source_channel: 'channel-51',
    destination_chain: 'Axelar',
    destination_chainid: 'axelar-dojo-1',
    destination_channel: 'channel-42',
    known_operators: 'AUDIT.one, Cros-nest, Polkachu *looking for more operators*'
  },
  {
    key: '2',
    source_channel: 'channel-35',
    destination_chain: 'Comdex',
    destination_chainid: 'comdex-1',
    destination_channel: 'channel-10',
    known_operators: 'Architect Nodes, Cros-nest *looking for more operators*'
  },
  {
    key: '3',
    source_channel: 'channel-24',
    destination_chain: 'Cosmos Hub',
    destination_chainid: 'cosmoshub-4',
    destination_channel: 'channel-190',
    known_operators: 'AUDIT.one ⚡, Architect Nodes ⚡️, Cros-nest ⚡️, CryptoCrew ⚡, DSRV, Stakin'
  },
  {
    key: '4',
    source_channel: 'channel-68',
    destination_chain: 'Crescent',
    destination_chainid: 'crescent-1',
    destination_channel: 'channel-30',
    known_operators: 'Simply Staking *looking for more operators*'
  },
  {
    key: '5',
    source_channel: 'channel-38',
    destination_chain: 'Gravity Bridge',
    destination_chainid: 'gravity-bridge-3',
    destination_channel: 'channel-24',
    known_operators: 'AUDIT.one, bitszn, Cosmonaut Stakes, CryptoCrew, Stakin'
  },
  {
    key: '6',
    source_channel: 'channel-68',
    destination_chain: 'Crescent',
    destination_chainid: 'crescent-1',
    destination_channel: 'channel-30',
    known_operators: 'Simply Staking *looking for more operators*'
  },
  {
    key: '7',
    source_channel: 'channel-38',
    destination_chain: 'Gravity Bridge',
    destination_chainid: 'gravity-bridge-3',
    destination_channel: 'channel-24',
    known_operators: 'AUDIT.one, bitszn, Cosmonaut Stakes, CryptoCrew, Stakin'
  },
];

const Mainnet = () => {
  return (
    <div>
      <h2 className="mb-1">IBC Channels</h2>
      <h3>Mainnet IBC channels for comdex-1</h3>
      <p>
        Note: <span className="text-muted">Raise a PR on</span> <Link to={{ pathname: "https://github.com" }} target="_blank">Github</Link>
      </p>
      
      <Table dataSource={dataSource} columns={columns} bordered pagination={false} scroll={{ y: 'calc(100vh - 480px)' }} />

      <BottomNav
        preNavLink="/local-node-setup"
        prevNavText="Local Node Setup"
        nextNavLink="/ibc-testnet"
        nextNavText="Testnet IBC Testnet for comdex-test2"
      />

    </div>
  );
};

export default Mainnet;