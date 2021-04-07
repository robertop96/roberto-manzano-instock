import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import warehouseDeatils from "../src/components/WarehouseDeatils/WarehouseDetails.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <Switch>
          <Route path="/" component={warehouseDeatils} />
          {/* <Route path="/warhouses" component={Warehouses} />
          <Route path="/inventory" component={Inventory} />
          <Route path="/placeholder" component={PLACEHOLDER} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
