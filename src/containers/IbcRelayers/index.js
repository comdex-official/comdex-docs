import { Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { BottomNav, Copy, SvgIcon } from "../../components/common";
import { ibcRelayers } from "./data";
import "./index.less";

const truncateString = (string, front, back) => {
  if (typeof string === "string") {
    return `${string?.substr(0, front)}...${string?.substr(
      string?.length - back,
      string?.length
    )}`;
  }
};

const columns = [
  {
    title: "Relayer",
    dataIndex: "relayer",
    key: "relayer",
    width: 130,
  },
  {
    title: "Contact",
    dataIndex: "contact",
    key: "contact",
    width: 240,
    render: (_, record) => (
      <div className="table-contact">
        {record.email &&
          <div className="contact-row">
            <div className="icon email-icon">
              <SvgIcon name="email" viewbox="0 0 13 8" />
            </div>
            {record.email}
          </div>
        }
        {record.telegram &&
          <div className="contact-row">
            <div className="icon telegram-icon">
              <SvgIcon name="telegram" viewbox="0 0 24.635 20.66" />
            </div>
            {record.telegram}
          </div>
        }
        {record.twitter &&
          <div className="contact-row">
            <div className="icon twitter-icon">
              <SvgIcon name="twitter" viewbox="0 0 25.617 20.825" />
            </div>
            {record.twitter}
          </div>
        }
      </div>
    ),
  },
  {
    title: "Support",
    dataIndex: "support",
    key: "support",
    width: 200,
  },
  {
    title: "Comdex Address",
    dataIndex: "comdex_address",
    key: "comdex_address",
    width: 170,
    render: (_, record) => <div className="wallet-adress-col">
      <span className="mr-3"> {truncateString(record.comdex_address, 6, 6)} </span>
      <Copy text={record.comdex_address} />
    </div>
  },
  {
    title: "Destination Chain Address",
    dataIndex: "destination_chain_address",
    key: "destination_chain_address",
  },
  {
    title: "Validator Name",
    dataIndex: "validator_name",
    key: "validator_name",
  },
];

const IbcRelayers = () => {
  return (
    <div>
      <h2 className="mb-1">IBC Relayers</h2>
      <h4>A big thank you to our reliable IBC partners. We invite everyone to support and follow our IBC relayers.</h4>
      <p>
        Note: <span className="text-muted">Raise a PR on</span>{" "}
        <Link to={{ pathname: "https://github.com/comdex-official/comdex-docs/pulls" }} target="_blank">Github</Link>
      </p>
      {((ibcRelayers !== null)) &&
        <Table
          dataSource={ibcRelayers}
          columns={columns}
          bordered
          pagination={false}
          scroll={{ y: "calc(100vh - 480px)", x: "100%" }}
        />
      }
      <BottomNav
        preNavLink="/ibc-testnet"
        prevNavText="Testnet IBC Testnet for comdex-test2"
        nextNavLink="/chain-endpoints"
        nextNavText="Comdex Chain Endpoints"
      />
    </div>
  );
};

export default IbcRelayers;