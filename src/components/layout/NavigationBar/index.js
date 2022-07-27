import React from "react";
import { Link } from "react-router-dom";
import { SvgIcon } from "../../../components/common"
import "./index.less";

const NavigationBar = () => {
	return (
		<>
			<div className="logo">
				<Link to="/">
					<SvgIcon name="logo" viewbox="0 0 112.095 24.926" />
				</Link>
			</div>
		</>
	);
};

export default NavigationBar;