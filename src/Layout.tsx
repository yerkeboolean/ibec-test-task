import React from "react";
import {Menu} from "./components";
import "./layout.scss";

const Layout: React.FC = (props) => (
    <div className="layout">
        <Menu />
        {props.children}
    </div>
);

export default Layout;
