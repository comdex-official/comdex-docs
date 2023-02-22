import { Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { BottomNav } from "../../components/common";
import { chainEndPoints } from "./data";
import "./index.less";

const columns = [
  {
    title: "Chain Name",
    dataIndex: "chain_name",
    key: "chain_name",
  },
  {
    title: "RPC/REST Endpoints",
    dataIndex: "endpoints",
    key: "endpoints",
  },
  {
    title: "Name of the Validator",
    dataIndex: "nameof_validator",
    key: "nameof_validator",
  },
];

const dataSource = chainEndPoints.map((item) => {
  return {
    key: item?.key,
    chain_name: item?.chain_name,
    endpoints: (
      <>
        {item?.rpc} <br /> {item?.rpc}
      </>
    ),
    nameof_validator: item?.nameof_validator,
  };
});

const ChainEndpoints = () => {
  return (
    <div>
      <h2 className="mb-1">Comdex Chain Endpoints</h2>
      <h4>Please mention your RPC/REST endpoints for comdex products.</h4>
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
        dataSource={dataSource}
        columns={columns}
        bordered
        pagination={false}
        scroll={{ y: "calc(100vh - 480px)" }}
      />

      <BottomNav
        preNavLink="/ibc-relayers"
        prevNavText="IBC Relayers"
        nextNavLink="/test-net"
        nextNavText="Join comdex Test Net as a validator"
      />
    </div>
  );
};

export default ChainEndpoints;
