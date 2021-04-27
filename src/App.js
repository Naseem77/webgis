import React from 'react';
import { Route, Switch } from "react-router-dom";
import MapPage from "./views/MapPage";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={MapPage} />
    </Switch>
  );
}

export default App;
