import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";

const loading = () => <div>Loading...</div>;

const Dashboard = React.lazy(() => import('./pages/Dashboard'))
const Login = React.lazy(() => import('./pages/Login'))


const Routing = () => {
  return (
    <Router>
      <React.Suspense fallback={loading()}>
        <Switch>
          <Route exact path="/" component={withRouter(Dashboard)} />
          <Route exact path="/login" component={withRouter(Login)} />
        </Switch>
      </React.Suspense>
    </Router>
  );
};

export default Routing