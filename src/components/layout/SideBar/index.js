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
            <Menu.Item key="m2" icon={<SvgIcon name="intro-icon" viewbox="0 0 33.007 36.341" />}>
              <NavLink
                to="/comdex-ecosystem"
                className={location.pathname === "/comdex-ecosystem" ? "selected" : ""}
              >
                The Comdex Ecosystem
              </NavLink>
            </Menu.Item>
            <Menu.SubMenu key="m3" title="Modules" icon={<SvgIcon name="governance-icon" viewbox="0 0 32.076 28.288" />}>
              <Menu.Item key="m3-1" icon={<SvgIcon name="voting" viewbox="0 0 30 22.222" />}>
                <NavLink
                  to="/asset"
                  className={location.pathname === "/asset" ? "selected" : ""}
                >
                  Asset
                </NavLink>
              </Menu.Item>
              <Menu.Item key="m3-2" icon={<SvgIcon name="voting" viewbox="0 0 30 22.222" />}>
                <NavLink
                  to="/auction"
                  className={location.pathname === "/auction" ? "selected" : ""}
                >
                  Auction
                </NavLink>
              </Menu.Item>
              <Menu.Item key="m3-3" icon={<SvgIcon name="voting" viewbox="0 0 30 22.222" />}>
                <NavLink
                  to="/bandoracle"
                  className={location.pathname === "/bandoracle" ? "selected" : ""}
                >
                  Bandoracle
                </NavLink>
              </Menu.Item>
              <Menu.Item key="m3-4" icon={<SvgIcon name="voting" viewbox="0 0 30 22.222" />}>
                <NavLink
                  to="/collector"
                  className={location.pathname === "/collector" ? "selected" : ""}
                >
                  Collector
                </NavLink>
              </Menu.Item>
              <Menu.Item key="m3-5" icon={<SvgIcon name="voting" viewbox="0 0 30 22.222" />}>
                <NavLink
                  to="/esm"
                  className={location.pathname === "/esm" ? "selected" : ""}
                >
                  ESM
                </NavLink>
              </Menu.Item>
              <Menu.Item key="m3-6" icon={<SvgIcon name="voting" viewbox="0 0 30 22.222" />}>
                <NavLink
                  to="/lend"
                  className={location.pathname === "/lend" ? "selected" : ""}
                >
                  Lend
                </NavLink>
              </Menu.Item>
              <Menu.Item key="m3-7" icon={<SvgIcon name="voting" viewbox="0 0 30 22.222" />}>
                <NavLink
                  to="/liquidation"
                  className={location.pathname === "/liquidation" ? "selected" : ""}
                >
                  Liquidation
                </NavLink>
              </Menu.Item>
              <Menu.Item key="m3-8" icon={<SvgIcon name="voting" viewbox="0 0 30 22.222" />}>
                <NavLink
                  to="/liquidity"
                  className={location.pathname === "/liquidity" ? "selected" : ""}
                >
                  Liquidity
                </NavLink>
              </Menu.Item>
              <Menu.Item key="m3-9" icon={<SvgIcon name="voting" viewbox="0 0 30 22.222" />}>
                <NavLink
                  to="/locker"
                  className={location.pathname === "/locker" ? "selected" : ""}
                >
                  Locker
                </NavLink>
              </Menu.Item>
              <Menu.Item key="m3-10" icon={<SvgIcon name="voting" viewbox="0 0 30 22.222" />}>
                <NavLink
                  to="/market"
                  className={location.pathname === "/market" ? "selected" : ""}
                >
                  Market
                </NavLink>
              </Menu.Item>
              <Menu.Item key="m3-11" icon={<SvgIcon name="voting" viewbox="0 0 30 22.222" />}>
                <NavLink
                  to="/rewards"
                  className={location.pathname === "/rewards" ? "selected" : ""}
                >
                  Rewards
                </NavLink>
              </Menu.Item>
              <Menu.Item key="m3-12" icon={<SvgIcon name="voting" viewbox="0 0 30 22.222" />}>
                <NavLink
                  to="/tokenmint"
                  className={location.pathname === "/tokenmint" ? "selected" : ""}
                >
                  Tokenmint
                </NavLink>
              </Menu.Item>
              <Menu.Item key="m3-13" icon={<SvgIcon name="voting" viewbox="0 0 30 22.222" />}>
                <NavLink
                  to="/vault"
                  className={location.pathname === "/vault" ? "selected" : ""}
                >
                  Vault
                </NavLink>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="m4" title="Build dApp on comdex" icon={<SvgIcon name="governance-icon" viewbox="0 0 32.076 28.288" />}>
              <Menu.Item key="m4-1" icon={<SvgIcon name="voting" viewbox="0 0 30 22.222" />}>
                <NavLink
                  to="/build-introduction"
                  className={location.pathname === "/build-introduction" ? "selected" : ""}
                >
                  Introduction
                </NavLink>
              </Menu.Item>
              <Menu.Item key="m4-2" icon={<SvgIcon name="voting" viewbox="0 0 30 22.222" />}>
                <NavLink
                  to="/using-generic-modules"
                  className={location.pathname === "/using-generic-modules" ? "selected" : ""}
                >
                  Using generic modules
                </NavLink>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="m5" icon={<SvgIcon name="intro-icon" viewbox="0 0 33.007 36.341" />}>
              <NavLink
                to="/local-node-setup"
                className={location.pathname === "/local-node-setup" ? "selected" : ""}
              >
                Local Node Setup
              </NavLink>
            </Menu.Item>
            <Menu.Item key="m6" icon={<SvgIcon name="intro-icon" viewbox="0 0 33.007 36.341" />}>
              <NavLink
                to="/test-net"
                className={location.pathname === "/test-net" ? "selected" : ""}
              >
                Join comdex Test Net as a validator
              </NavLink>
            </Menu.Item>
            <Menu.Item key="m7" icon={<SvgIcon name="intro-icon" viewbox="0 0 33.007 36.341" />}>
              <NavLink
                to="/main-net"
                className={location.pathname === "/main-net" ? "selected" : ""}
              >
                Join comdex Main Net as a validator
              </NavLink>
            </Menu.Item>
          </Menu>
          <div className="social-footer">
            <Link to={{ pathname: "https://twitter.com/cSwap_Finance" }} target="_blank">
              <SvgIcon name="twitter" viewbox="0 0 25.617 20.825" />
            </Link>
            <Link to={{ pathname: "https://t.me/cSwap_finance" }} target="_blank">
              <SvgIcon name="telegram" viewbox="0 0 24.635 20.66" />
            </Link>
            <Link to={{ pathname: "/" }}>
              <SvgIcon name="discord" viewbox="0 0 29.539 22.155" />
            </Link>
          </div>
        </Scrollbar>
      </div>
    </div>
  );
};

export default SideBar;
