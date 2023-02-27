import { Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { BottomNav, Col, Row } from "../../components/common";
import "./index.less";

const columns = [
  {
    title: "Contribution",
    dataIndex: "contribution",
  },
];

const dataSource = [
  {
    key: "1",
    contribution: "Running IBC Relayers",
  },
  {
    key: "2",
    contribution: "Running Graph / subGraph Nodes",
  },
  {
    key: "3",
    contribution: "Providing API/RPC services",
  },
  {
    key: "4",
    contribution:
      "Maintain tooling - Explorers, Wallet  Support, Analytics etc.",
  },
];

const columns2 = [
  {
    title: "Contribution",
    dataIndex: "contribution",
  },
];

const dataSource2 = [
  {
    key: "1",
    contribution: "Run a Testnet Validator (95% uptime + fast responses)",
  },
  {
    key: "2",
    contribution: "Run a Testnet Faucet",
  },
  {
    key: "3",
    contribution: "Run Testnet IBC Relayers",
  },
  {
    key: "4",
    contribution: "Maintain Testnet tooling - Wallet Support, Analytics etc.",
  },
];

const FoundationDelegation = () => {
  return (
    <div>
      <div className="border-box">
        To receive foundation delegations, it is required to apply through this{" "}
        <Link
          to={{
            pathname:
              "https://docs.google.com/forms/d/1LMCz1M8aY5td8OIl5p5k2NQpKKsHB_BJZA5q77vasK4/edit",
          }}
          target="_blank"
        >
          form
        </Link>{" "}
        before 28/02/2023 - 23:59UTC
      </div>
      <h2 className="mb-1">Comdex Foundation Delegation</h2>
      <p>
        Validators will be evaluated based on the below requirements as well as their Mainnet and Testnet and any other contributions towards the Comdex community. The requirements are as follow :
      </p>
      <h4>Requirements</h4>

      <div className="grey-box">
        <ul>
          <li>Commission: Between 1-10%</li>
          <li>
            Remove voting power criteria
          </li>
          <li>Remove Self-Stake criteria : ≥10,000 CMDX</li>
          <li>
            Uptime (average from 1st Nov-1st March 23 ): ≥95% at all times
          </li>
          <li>Governance Participation (starting from Proposal #60): ≥80%</li>
        </ul>
      </div>

      <p>
        <b>FROM</b> 15th March 2023 onwards, all validators will be evaluated continuously
        against the above criteria. When submitting your application, please
        ensure that everything is in place to meet the above criteria.
      </p>

      <h3>Addition delegations</h3>

      <p>
        Delegations will also be made based on the value and uniqueness of the contribution which have been mentioned below.
      </p>

      <Row className="pt-3">
        <Col md="6" className="mb-4">
          <h3>Mainnet Contribution</h3>
          <Table
            dataSource={dataSource}
            columns={columns}
            bordered
            pagination={false}
            scroll={{ y: "200px" }}
          />
        </Col>
        <Col md="6">
          <h3>Testnet Contribution</h3>
          <Table
            dataSource={dataSource2}
            columns={columns2}
            bordered
            pagination={false}
            scroll={{ y: 200 }}
          />
        </Col>
      </Row>

      <p>
        *To include contributions that are not listed above, please make your
        case in the Discord channel ‘
        <Link
          to={{
            pathname:
              "https://discord.com/channels/890929797318967416/891998323416907786",
          }}
          target="_blank"
        >
          validators-discussion
        </Link>
        ’
      </p>

      <BottomNav
        preNavLink="/main-net"
        prevNavText="Join comdex Main Net as a validator"
      />
    </div>
  );
};

export default FoundationDelegation;
