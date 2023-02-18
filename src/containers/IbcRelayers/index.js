import { Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { BottomNav, SvgIcon } from "../../components/common";
import "./index.less";

const columns = [
  {
    title: 'Relayer',
    dataIndex: 'relayer',
    key: 'relayer',
    width: 130
  },
  {
    title: 'Contact',
    dataIndex: 'contact',
    key: 'contact',
    width: 240
  },
  {
    title: 'Support',
    dataIndex: 'support',
    key: 'support',
    width: 230
  },
  {
    title: 'Comdex Channel',
    dataIndex: 'comdex_channel',
    key: 'comdex_channel',
  },
  {
    title: 'Destination Channel',
    dataIndex: 'destination_channel',
    key: 'destination_channel',
  },
  {
    title: 'Validator Name',
    dataIndex: 'validator_name',
    key: 'validator_name',
  },
];

const dataSource = [
  {
    key: '1',
    relayer: 'AUDIT.One',
    contact: <div className="table-contact">
      <div className="contact-row"><div className="icon email-icon"> <SvgIcon name='email' viewbox='0 0 13 8' /> </div> hello@audit.one</div>
      <div className="contact-row"><div className="icon telegram-icon"> <SvgIcon name='telegram' viewbox='0 0 24.635 20.66' /> </div> @AuditOne</div>
      <div className="contact-row"><div className="icon twitter-icon"> <SvgIcon name='twitter' viewbox='0 0 25.617 20.825' /> </div> @AuditOne_</div>
    </div>,
    support: '🔒 Delegate to AUDIT.One on CosmosHub, Osmosis, Juno',
    comdex_channel: '',
    destination_channel: '',
    validator_name: ''
  },
  {
    key: '2',
    relayer: 'Cephalopod Equipment Corp',
    contact: <div className="table-contact">
      <div className="contact-row"><div className="icon email-icon"> <SvgIcon name='email' viewbox='0 0 13 8' /> </div> validator@informal.systems</div>
      <div className="contact-row"><div className="icon telegram-icon"> <SvgIcon name='telegram' viewbox='0 0 24.635 20.66' /> </div> Telegram @JD_Lorax</div>
      <div className="contact-row"><div className="icon twitter-icon"> <SvgIcon name='twitter' viewbox='0 0 25.617 20.825' /> </div> Twitter @CephalopodEquip</div>
    </div>,
    support: '🔒 Delegate to Cephalopod Equipment Corp on: Osmosis, Cosmos Hub, Regen, Ixo, Juno, Cheqd, Akash, Agoric',
    comdex_channel: '',
    destination_channel: '',
    validator_name: ''
  },
];

const IbcRelayers = () => {
  return (
    <div>
      <h2 className="mb-1">IBC Relayers</h2>
      <h4>Huge shout-out to our reliable IBC-Relayer operators!</h4>
      <h4>We encourage everyone to follow and support our IBC-relayer operators</h4>
      <p>
        Note: <span className="text-muted">Raise a PR on</span> <Link to={{ pathname: "https://github.com" }} target="_blank">Github</Link>
      </p>
      
      <Table dataSource={dataSource} columns={columns} bordered pagination={false} scroll={{ y: 'calc(100vh - 480px)' }} />

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