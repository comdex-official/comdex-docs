import React, { useState } from "react";
import SvgSprite from "./utils/SvgSpriteLoader";
import { Layout, Button } from "antd";
import SideBar from "./components/layout/SideBar";
import NavigationBar from "./components/layout/NavigationBar";
import { useMediaQuery } from "react-responsive";
import ScrollToTop from './ScrollToTop';

//Svg Sprite
import svgFile from "./assets/images/svg/svg-sprite.svg";

import "./App.less";
import { SvgIcon } from "./components/common";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

import Introduction from "./containers/Introduction";
import Home from "./containers/Home";
import TheComdexEcosystem from "./containers/TheComdexEcosystem";
import Asset from "./containers/Asset";
import Auction from "./containers/Auction";
import Bandoracle from "./containers/Bandoracle";
import Collector from "./containers/Collector";
import Esm from "./containers/Esm";
import Lend from "./containers/Lend";
import Liquidation from "./containers/Liquidation";
import Liquidity from "./containers/Liquidity";
import Locker from "./containers/Locker";
import Market from "./containers/Market";
import Rewards from "./containers/Rewards";
import Tokenmint from "./containers/Tokenmint";
import Vault from "./containers/Vault";
import LocalNodeSetup from "./containers/LocalNodeSetup";
import JoincomdexTestNet from "./containers/JoincomdexTestNet";
import JoincomdexMainNet from "./containers/JoincomdexMainNet";
import BuildDapp from "./containers/BuildDapp";

const { Header, Content, Sider, Footer } = Layout;

const App = () => {
	const [collapsed, setCollapsed] = React.useState(false);
	const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
	const [isOpen, setIsOpen] = useState(!!isMobile);
	const toggleCollapsed = () => {
		setCollapsed(!collapsed);
		setIsOpen(!isOpen);
	};
	return (
		<>
			<SvgSprite url={svgFile} />
			<Router>
				<Layout>
					<Header className="header">
						<div className="header-inner">
							<Button
								className="menu-link"
								type="link"
								onClick={toggleCollapsed}
								style={{ marginBottom: 16 }}
							>
								{collapsed ? (
									<SvgIcon
										name="chevron-left"
										viewbox="0 0 5.333 9.333"
									/>
								) : (
									<SvgIcon
										name="chevron-right"
										viewbox="0 0 5.333 9.333"
									/>
								)}
							</Button>
							<NavigationBar />
						</div>
					</Header>
					<Layout className="main-content">
						<>
							<Sider
								width={290}
								collapsible
								breakpoint="lg"
								className="cSwap-sider"
								collapsed={isOpen}
								trigger={null}
							>
								<SideBar />
							</Sider>
							<Content className="right-content-wrapper">
								<ScrollToTop>
									<Switch>
										<Route exact path="/" component={Home} />
										<Route exact path="/introduction" component={Introduction} />
										<Route exact path="/comdex-ecosystem" component={TheComdexEcosystem} />
										<Route exact path="/asset" component={Asset} />
										<Route exact path="/auction" component={Auction} />
										<Route exact path="/bandoracle" component={Bandoracle} />
										<Route exact path="/collector" component={Collector} />
										<Route exact path="/esm" component={Esm} />
										<Route exact path="/lend" component={Lend} />
										<Route exact path="/liquidation" component={Liquidation} />
										<Route exact path="/liquidity" component={Liquidity} />
										<Route exact path="/locker" component={Locker} />
										<Route exact path="/market" component={Market} />
										<Route exact path="/rewards" component={Rewards} />
										<Route exact path="/tokenmint" component={Tokenmint} />
										<Route exact path="/vault" component={Vault} />
										<Route exact path="/build-dapp" component={BuildDapp} />
										<Route exact path="/local-node-setup" component={LocalNodeSetup} />
										<Route exact path="/test-net" component={JoincomdexTestNet} />
										<Route exact path="/main-net" component={JoincomdexMainNet} />
									</Switch>
								</ScrollToTop>
								<Footer className="main-footer">
									© 2022 Comdex All rights reserved.
								</Footer>
							</Content>
						</>
					</Layout>
				</Layout>
			</Router>
		</>
	);
};

export default App;
