import { Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { BottomNav, Col, Row, SvgIcon } from "../../components/common";
import "./index.less";

const columns = [
  {
    title: 'Contribution',
    dataIndex: 'contribution',
  },
];

const dataSource = [
  {
    key: '1',
    contribution: 'Running IBC Relayers',
  },
  {
    key: '2',
    contribution: 'Running Graph / subGraph Nodes',
  },
  {
    key: '3',
    contribution: 'Providing API/RPC services',
  },
  {
    key: '4',
    contribution: 'Maintain tooling - Explorers, Wallet  Support, Analytics etc.',
  },
];

const columns2 = [
  {
    title: 'Contribution',
    dataIndex: 'contribution',
  },
];

const dataSource2 = [
  {
    key: '1',
    contribution: 'Run a Testnet Validator (95% uptime + fast responses)',
  },
  {
    key: '2',
    contribution: 'Run a Testnet Faucet',
  },
  {
    key: '3',
    contribution: 'Run Testnet IBC Relayers',
  },
  {
    key: '4',
    contribution: 'Maintain Testnet tooling - Wallet Support, Analytics etc.',
  },
];

const FoundationDelegation = () => {
  return (
    <div>
      <div className="border-box">
        To receive foundation delegations, it is required to apply through this form before 28/02/2023 - 23:59UTC
      </div>
      <h2 className="mb-1">Comdex Foundation Delegation</h2>
      <p>The below requirement to be met in order to be eligible for any delegation</p>
      <h4>Requirements</h4>
      
      <div className="grey-box">
        <ul>
          <li>Been in the active set all times </li>
          <li><b>Voting Power ≤2.5%</b></li>
          <li>Commission: ≤5% </li>
          <li><b>Self-Stake: ≥10,000 CMDX</b></li>
          <li>Uptime (30day average): ≥95% at all times </li>
          <li>Governance Participation (starting from Proposal #60)*: ≥80%</li>
        </ul>
      </div>

      <p>From 01/11/2022 onwards, all validators will be evaluated continuously against the above criteria. When submitting your application, please ensure that everything is in place to meet the above criteria.</p>

      <h3>Addition delegations</h3>

      <p>
        Delegations will be made not only if one meets the minimum criteria but also based on value and uniqueness of the contribution which have been mentioned below.
      </p>  
      
      <Row className='pt-3'>
        <Col md='6' className='mb-4'>
          <h3>Mainnet Contribution</h3>
          <Table dataSource={dataSource} columns={columns} bordered pagination={false} scroll={{ y: '200px' }} />
        </Col>
        <Col md='6'>
          <h3>Testnet Contribution</h3>
          <Table dataSource={dataSource2} columns={columns2} bordered pagination={false} scroll={{ y: 200 }} />
        </Col>
      </Row>

      <p>
        *To include contributions that are not listed above, please make your case in the Discord channel ‘<Link to={{ pathname: "https://www.comdex.one" }} target="_blank">validators-discussion</Link>’
      </p>

      <BottomNav
        preNavLink="/main-net"
        prevNavText="Join comdex Main Net as a validator"
      />

    </div>
  );
};

export default FoundationDelegation;