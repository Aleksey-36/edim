import { Switch, Route } from "react-router-dom";

import Home from "./Home";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/test">
        <div>test</div>
      </Route>
    </Switch>
  );
};

export default Routes;
