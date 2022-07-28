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
			<Link className="right-link" to={{ pathname: 'https://github.com/comdex-official/docs' }} target="_black">
				<SvgIcon name="core-icon" viewbox="0 0 34.356 34.355" />
				Comdex Core
			</Link>
		</>
	);
};

export default NavigationBar;