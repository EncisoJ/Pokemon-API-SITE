import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Move from "./Pages/Move";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/:id">
          <Move />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
