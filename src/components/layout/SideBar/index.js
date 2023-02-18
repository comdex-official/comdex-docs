import React from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { SvgIcon } from "../../common";
import { Menu } from "antd";
import "./index.less";
import Scrollbar from "react-scrollbars-custom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const SideBar = () => {
  const location = useLocation();
  return (
    <div className="sidebar-inner">
      <div className="sidebar-menu">
        <Scrollbar style={{ height: 'calc(100vh - 105px)' }}>
          <Menu mode="inline">
            <Menu.Item key="m1" icon={<SvgIcon name="intro-icon" viewbox="0 0 33.007 36.341" />}>
              <NavLink
                to="/introduction"
                className={location.pathname === "/introduction" ? "selected" : ""}
              >
                Introduction
              </NavLink>
            </Menu.Item>
            <Menu.Item key="m2" icon={<SvgIcon name="comdex-icon" viewbox="0 0 27.385 26.049" />}>
              <NavLink
                to="/comdex-ecosystem"
                className={location.pathname === "/comdex-ecosystem" ? "selected" : ""}
              >
                The Comdex Ecosystem
              </NavLink>
            </Menu.Item>
            <Menu.SubMenu key="m3" title="Modules" icon={<SvgIcon name="modules-icon" viewbox="0 0 26.913 26.588" />}>
              <Menu.Item key="m3-1" icon={<SvgIcon name="polygon-icon" viewbox="0 0 16.389 14.75" />}>
                <NavLink
                  to="/asset"
                  className={location.pathname === "/asset" ? "selected" : ""}
                >
                  Asset
                </NavLink>
              </Menu.Item>
              <Menu.Item key="m3-2" icon={<SvgIcon name="polygon-icon" viewbox="0 0 16.389 14.75" />}>
                <NavLink
                  to="/auction"
                  className={location.pathname === "/auction" ? "selected" : ""}
                >
                  Auction
                </NavLink>
              </Menu.Item>
              <Menu.Item key="m3-3" icon={<SvgIcon name="polygon-icon" viewbox="0 0 16.389 14.75" />}>
                <NavLink
                  to="/bandoracle"
                  className={location.pathname === "/bandoracle" ? "selected" : ""}
                >
                  Bandoracle
                </NavLink>
              </Menu.Item>
              <Menu.Item key="m3-4" icon={<SvgIcon name="polygon-icon" viewbox="0 0 16.389 14.75" />}>
                <NavLink
                  to="/collector"
                  className={location.pathname === "/collector" ? "selected" : ""}
                >
                  Collector
                </NavLink>
              </Menu.Item>
              <Menu.Item key="m3-5" icon={<SvgIcon name="polygon-icon" viewbox="0 0 16.389 14.75" />}>
                <NavLink
                  to="/esm"
                  className={location.pathname === "/esm" ? "selected" : ""}
                >
                  ESM
                </NavLink>
              </Menu.Item>
              <Menu.Item key="m3-6" icon={<SvgIcon name="polygon-icon" viewbox="0 0 16.389 14.75" />}>
                <NavLink
                  to="/lend"
                  className={location.pathname === "/lend" ? "selected" : ""}
                >
                  Lend
                </NavLink>
              </Menu.Item>
              <Menu.Item key="m3-7" icon={<SvgIcon name="polygon-icon" viewbox="0 0 16.389 14.75" />}>
                <NavLink
                  to="/liquidation"
                  className={location.pathname === "/liquidation" ? "selected" : ""}
                >
                  Liquidation
                </NavLink>
              </Menu.Item>
              <Menu.Item key="m3-8" icon={<SvgIcon name="polygon-icon" viewbox="0 0 16.389 14.75" />}>
                <NavLink
                  to="/liquidity"
                  className={location.pathname === "/liquidity" ? "selected" : ""}
                >
                  Liquidity
                </NavLink>
              </Menu.Item>
              <Menu.Item key="m3-9" icon={<SvgIcon name="polygon-icon" viewbox="0 0 16.389 14.75" />}>
                <NavLink
                  to="/locker"
                  className={location.pathname === "/locker" ? "selected" : ""}
                >
                  Locker
                </NavLink>
              </Menu.Item>
              <Menu.Item key="m3-10" icon={<SvgIcon name="polygon-icon" viewbox="0 0 16.389 14.75" />}>
                <NavLink
                  to="/market"
                  className={location.pathname === "/market" ? "selected" : ""}
                >
                  Market
                </NavLink>
              </Menu.Item>
              <Menu.Item key="m3-11" icon={<SvgIcon name="polygon-icon" viewbox="0 0 16.389 14.75" />}>
                <NavLink
                  to="/rewards"
                  className={location.pathname === "/rewards" ? "selected" : ""}
                >
                  Rewards
                </NavLink>
              </Menu.Item>
              <Menu.Item key="m3-12" icon={<SvgIcon name="polygon-icon" viewbox="0 0 16.389 14.75" />}>
                <NavLink
                  to="/tokenmint"
                  className={location.pathname === "/tokenmint" ? "selected" : ""}
                >
                  Tokenmint
                </NavLink>
              </Menu.Item>
              <Menu.Item key="m3-13" icon={<SvgIcon name="polygon-icon" viewbox="0 0 16.389 14.75" />}>
                <NavLink
                  to="/vault"
                  className={location.pathname === "/vault" ? "selected" : ""}
                >
                  Vault
                </NavLink>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="m4" icon={<SvgIcon name="build-icon" viewbox="0 0 31.5 36" />}>
              <NavLink
                to="/build-dapp"
                className={location.pathname === "/build-dapp" ? "selected" : ""}
              >
                Build dApp on comdex
              </NavLink>
            </Menu.Item>
            <Menu.Item key="m5" icon={<SvgIcon name="node" viewbox="0 0 30 33.837" />}>
              <NavLink
                to="/local-node-setup"
                className={location.pathname === "/local-node-setup" ? "selected" : ""}
              >
                Local Node Setup
              </NavLink>
            </Menu.Item>
            <Menu.SubMenu key="m6" title="Relayers" icon={<SvgIcon name="relayers" viewbox="0 0 12 10" />}>
              <Menu.SubMenu key="m6-1" title="IBC Channels" icon={<SvgIcon name="polygon-icon" viewbox="0 0 16.389 14.75" />}>
                <Menu.Item key="m6-1-1" icon={<SvgIcon name="polygon-icon" viewbox="0 0 16.389 14.75" />}>
                  <NavLink
                    to="/ibc-mainnet"
                    className={location.pathname === "/ibc-mainnet" ? "selected" : ""}
                  >
                    Mainnet
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="m6-1-2" icon={<SvgIcon name="polygon-icon" viewbox="0 0 16.389 14.75" />}>
                  <NavLink
                    to="/ibc-testnet"
                    className={location.pathname === "/ibc-testnet" ? "selected" : ""}
                  >
                    Testnet
                  </NavLink>
                </Menu.Item>
              </Menu.SubMenu>
              <Menu.Item key="m6-2" icon={<SvgIcon name="polygon-icon" viewbox="0 0 16.389 14.75" />}>
                <NavLink
                  to="/ibc-relayers"
                  className={location.pathname === "/ibc-relayers" ? "selected" : ""}
                >
                  IBC Relayers
                </NavLink>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="m7" icon={<SvgIcon name="endpoint" viewbox="0 0 10 10" />}>
              <NavLink
                to="/chain-endpoints"
                className={location.pathname === "/chain-endpoints" ? "selected" : ""}
              >
                Comdex Chain Endpoints
              </NavLink>
            </Menu.Item>
            <Menu.Item key="m8" icon={<SvgIcon name="validator" viewbox="0 0 37.75 27.963" />}>
              <NavLink
                to="/test-net"
                className={location.pathname === "/test-net" ? "selected" : ""}
              >
                Join comdex Test Net as a validator
              </NavLink>
            </Menu.Item>
            <Menu.Item key="m9" icon={<SvgIcon name="validator" viewbox="0 0 37.75 27.963" />}>
              <NavLink
                to="/main-net"
                className={location.pathname === "/main-net" ? "selected" : ""}
              >
                Join comdex Main Net as a validator
              </NavLink>
            </Menu.Item>
            <Menu.Item key="m9" icon={<SvgIcon name="delegation" viewbox="0 0 10 10" />}>
              <NavLink
                to="/foundation-delegation"
                className={location.pathname === "/foundation-delegation" ? "selected" : ""}
              >
                Comdex Foundation Delegation
              </NavLink>
            </Menu.Item>
          </Menu>
          <div className="social-footer">
            <Link to={{ pathname: "https://twitter.com/ComdexOfficial" }} target="_blank">
              <SvgIcon name="twitter" viewbox="0 0 25.617 20.825" />
            </Link>
            <Link to={{ pathname: "https://t.me/ComdexChat" }} target="_blank">
              <SvgIcon name="telegram" viewbox="0 0 24.635 20.66" />
            </Link>
            <Link to={{ pathname: "https://discord.com/invite/ypUb5Gyh7Z" }} target="_blank">
              <SvgIcon name="discord" viewbox="0 0 29.539 22.155" />
            </Link>
            <Link to={{ pathname: "https://blog.comdex.one/" }} target="_blank">
              <SvgIcon name="medium" viewbox="0 0 30.849 24.41" />
            </Link>
            <Link to={{ pathname: "https://forum.comdex.one/" }} target="_blank">
              <SvgIcon name="foruem" viewbox="0 0 27.205 27.205" />
            </Link>
          </div>
        </Scrollbar>
      </div>
    </div>
  );
};

export default SideBar;
