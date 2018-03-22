import "./tools/polyfills";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import history from "./tools/browserHistory";
import store from "./redux/store";
import Start from "./components/pages/Start";
import NoMatch from "./components/pages/404";

ReactDOM.render(
  <Provider store={store}>
      <Router history={history}>
        <div>
          <Switch>
            <Route exact path="/" component={Start} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
  </Provider>,
  document.getElementById("root")
);