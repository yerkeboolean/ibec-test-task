import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Main, Contacts} from "./pages";
import Layout from "./Layout";
import "./app.scss";

const App: React.FC = () => (
    <Router>
        <Layout>
            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>
                <Route path="/about">
                    <div>About</div>
                </Route>
                <Route path="/contacts">
                    <Contacts />
                </Route>
                <Route path="*">
                    <div>Sorry, no page</div>
                </Route>
            </Switch>
        </Layout>
    </Router>
);

export default App;
