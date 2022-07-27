import React from "react";
import { Link } from "react-router-dom";
import SvgIcon from "../svg-icon/svg-icon";
import "./index.less";

const BottomNav = (props) => {
  return (
    <div className="bottom-nav">
        {props.preNavLink &&
            <Link to={props.preNavLink} className="left-nav nav-item">
                <SvgIcon name="arrow-left" viewbox="0 0 34.364 24.001" />
                <div className="infotext">
                    <small>Previous</small>
                    <p>{props.prevNavText}</p>
                </div>
            </Link>
        }
        {props.nextNavLink &&
            <Link to={props.nextNavLink} className="right-nav nav-item">
                <div className="infotext">
                    <small>Next</small>
                    <p>{props.nextNavText}</p>
                </div>
                <SvgIcon name="arrow-right" viewbox="0 0 34.364 24.001" />
            </Link>
        }
    </div>
  );
};

export default BottomNav;
