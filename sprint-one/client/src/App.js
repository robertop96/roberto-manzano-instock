import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Warehouse from "./components/Warehouse/Warehouse"

function App() {
  return (
    
    <Router>
      <div className="App">
        <Warehouse />
        {/* <Header /> */}
        <Switch>
          {/* <Route path="/" component={HOME} /> */}
          <Route path="/warhouses" component={Warehouse} />
          {/* <Route path="/inventory" component={Inventory} /> */}
          {/* <Route path="/placeholder" component={PLACEHOLDER} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
