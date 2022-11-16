import React from "react";
import { List } from 'antd';
import { useHistory, Link } from 'react-router-dom';
import "./index.less";
import { SvgIcon } from "../../components/common";

const data = [
  {
    icon: <SvgIcon name='intro-icon' viewbox='0 0 33.007 36.341' />,
    title: 'Introduction',
    description: 'cSwap is a decentralized, IBC-enabled exchange built on the Comdex chain.',
    url: '/Introduction',
  },
  {
    icon: <SvgIcon name="comdex-icon" viewbox="0 0 27.385 26.049" />,
    title: 'The Comdex Ecosystem',
    description: 'A B2B application built to tokenize real-world commodity assets',
    url: '/comdex-ecosystem',
  },
  {
    icon: <SvgIcon name="modules-icon" viewbox="0 0 26.913 26.588" />,
    title: 'Modules',
    description: 'The x/asset modules facilitate creating Apps, Assets, Pairs , ExtendedPairVault.',
    url: '/asset',
  },
  {
    icon: <SvgIcon name="build-icon" viewbox="0 0 31.5 36" />,
    title: 'Build dApp on comdex',
    description: 'Auction module holds the key functionality for creating /managing auctions across all apps.',
    url: '/build-introduction',
  },
  {
    icon: <SvgIcon name="node" viewbox="0 0 30 33.837" />,
    title: 'Local Node Setup',
    description: 'Set up the local net ',
    url: '/local-node-setup',
  },
  {
    icon: <SvgIcon name="validator" viewbox="0 0 37.75 27.963" />,
    title: 'Join Mainnet as a validator',
    description: 'Checkout the documentation to join comdex main network',
    url: '/main-net',
  }
];

const Home = () => {
  const history = useHistory();
  return (
    <div>
      <h2 className="mb-0">Comdex Documentation</h2>
      <h4>A DeFi infrastructure layer for the Cosmos ecosystem.</h4>
      <h2 className="mb-0 mt-4">Explore Comdex</h2>
        <List
          className="home-list"
          grid={{ 
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 2,
            lg: 2,
            xl: 2,
            xxl: 2,
           }}
          dataSource={data}
          renderItem={item => (
            <List.Item onClick={() => { history.push(`${item.url}`) }}>
              <List.Item.Meta
                avatar={item.icon}
                title={item.title}
                description={item.description}
              />
            </List.Item>
          )}
        />
        <div className="bottom-cards">
          <Link to={{ pathname: "https://comdex.one/" }} target="_blank">
            <div className="card-items">
              <div className="arrow-link"><SvgIcon name='arrow-topright' viewbox='0 0 22.056 22.504' /></div>
              <SvgIcon name='comdex-icon' viewbox='0 0 27.385 26.049' />
              <h4>Comdex Website</h4>
              <p>link to redirect <br /> traffic to app</p>
            </div>
          </Link>
          <Link to={{ pathname: "https://discord.gg/ypUb5Gyh7Z" }} target="_blank">
            <div className="card-items">
              <div className="arrow-link"><SvgIcon name='arrow-topright' viewbox='0 0 22.056 22.504' /></div>
              <SvgIcon name='discord' viewbox='0 0 29.539 22.155' />
              <h4>Discord</h4>
              <p>chat with community <br /> on discord</p>
            </div>
          </Link>
          <Link to={{ pathname: "https://github.com/comdex-official" }} target="_blank">
            <div className="card-items">
              <div className="arrow-link"><SvgIcon name='arrow-topright' viewbox='0 0 22.056 22.504' /></div>
              <SvgIcon name='help-icon' viewbox='0 0 27 31.5' />
              <h4> Found an issue?</h4>
              <p>improve this page by adding <br /> suggestion on Github</p>
            </div>
          </Link>
        </div>
    </div>
  );
};

export default Home;
