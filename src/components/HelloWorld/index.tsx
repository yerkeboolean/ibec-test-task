import React from "react";
import "./index.scss";
import {Button} from "react-bootstrap";

const HelloWorld: React.FC = () => (
    <>
        <h1>Hello World</h1>

        <hr />

        <h3 className="hello">Environmental variables:</h3>
        <p>
            process.env.PRODUCTION: <b>{process.env.PRODUCTION.toString()}</b>
        </p>
        <Button variant="primary">Primary</Button>
        <p>
            process.env.NAME: <b>{process.env.NAME}</b>
        </p>
        <p>
            process.env.VERSION: <b>{process.env.VERSION}</b>
        </p>
    </>
);

export default HelloWorld;
