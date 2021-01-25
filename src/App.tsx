import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Main, Contacts, About} from "./pages";
import {Layout} from "./components";
import "./app.scss";

const App: React.FC = () => (
    <Router>
        <Layout>
            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>
                <Route path="/about">
                    <About />
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
