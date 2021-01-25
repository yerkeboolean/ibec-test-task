import React from "react";
import {Menu} from "..";
import "./layout.scss";
import {Ads} from "../../components";

const Layout: React.FC = (props) => (
    <div className="layout">
        <Menu />
        <div className="page">
            {props.children}
            <Ads />
        </div>
    </div>
);

export default Layout;
