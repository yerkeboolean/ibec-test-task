import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Main} from "./pages";

const App: React.FC = () => (
    <Router>
        <Switch>
            <Route path="/">
                <Main />
            </Route>
        </Switch>
    </Router>
);

export default App;
