import { Table, Tag } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { BottomNav, SvgIcon } from "../../components/common";
import "./index.less";

const columns = [
  {
    title: 'Chain Name',
    dataIndex: 'chain_name',
    key: 'chain_name'
  },
  {
    title: 'RPC/REST Endpoints',
    dataIndex: 'endpoints',
    key: 'endpoints'
  },
  {
    title: 'Name of the Validator',
    dataIndex: 'nameof_validator',
    key: 'nameof_validator'
  },
];

const dataSource = [
  {
    key: '1',
    chain_name: 'ATOM',
    endpoints: <>comdex-rest.zenscape.one <br />  comdex-rpc.zenscape.one</>,
    nameof_validator: 'axelar-dojo-1'
  },
  {
    key: '2',
    chain_name: 'OSMO',
    endpoints: <>comdex-rest.zenscape.one <br /> comdex-rpc.zenscape.one</>,
    nameof_validator: 'axelar-dojo-1'
  },
  {
    key: '3',
    chain_name: 'STRIDE',
    endpoints: <>comdex-rest.zenscape.one <br />  comdex-rpc.zenscape.one</>,
    nameof_validator: 'axelar-dojo-1'
  },
];

const ChainEndpoints = () => {
  return (
    <div>
      <h2 className="mb-1">Comdex Chain Endpoints</h2>
      <h4>Please mention your RPC/REST endpoints for comdex products.</h4>
      <p>
        <b>Note:</b> <span className="text-muted">Raise a PR on</span> <Link to={{ pathname: "https://github.com/comdex-official/comdex-docs/pulls" }} target="_blank">Github</Link>
      </p>
      
      <Table dataSource={dataSource} columns={columns} bordered pagination={false} scroll={{ y: 'calc(100vh - 480px)' }} />

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