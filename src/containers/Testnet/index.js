import { Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { BottomNav } from "../../components/common";
import { testnetIbcChannels } from "./data";
import "./index.less";

const columns = [
  {
    title: "Source Channel",
    dataIndex: "source_channel",
    key: "source_channel ",
  },
  {
    title: "Destination Chain",
    dataIndex: "destination_chain",
    key: "destination_chain",
  },
  {
    title: "Destination Chain -id",
    dataIndex: "destination_chainid",
    key: "destination_chainid",
  },
  {
    title: "Destination Channel",
    dataIndex: "destination_channel",
    key: "destination_channel",
  },
  {
    title: "Known Operators",
    dataIndex: "known_operators",
    key: "known_operators",
    width: 280,
  },
];

const dataSource = [
  {
    key: "1",
    source_channel: "channel-51",
    destination_chain: "Axelar",
    destination_chainid: "axelar-dojo-1",
    destination_channel: "channel-42",
    known_operators:
      "AUDIT.one, Cros-nest, Polkachu *looking for more operators*",
  },
];

const Testnet = () => {
  return (
    <div>
      <h2 className="mb-1">IBC Channels</h2>
      <h3>Testnet IBC Testnet for comdex-test2</h3>
      <p>
        <b>Note:</b> <span className="text-muted">Raise a PR on</span>{" "}
        <Link
          to={{
            pathname: "https://github.com/comdex-official/comdex-docs/blob/relayers-pages/src/docs/README.md",
          }}
          target="_blank"
        >
          Github
        </Link>
      </p>

      <Table
        dataSource={testnetIbcChannels}
        columns={columns}
        bordered
        pagination={false}
        scroll={{ y: "calc(100vh - 480px)" }}
      />

      <BottomNav
        preNavLink="/ibc-mainnet"
        prevNavText="Mainnet IBC channels for comdex-1"
        nextNavLink="/ibc-relayers"
        nextNavText="IBC Relayers"
      />
    </div>
  );
};

export default Testnet;
