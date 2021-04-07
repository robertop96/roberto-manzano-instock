import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WarehouseDeatils from "../src/components/WarehouseDeatils/WarehouseDetails.jsx";
import WarehouseModify from "./pages/WarehouseModify/WarehouseModify";
import Header from "../src/components/Header/Header.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={WarehouseDeatils} />
          {/* <Route path="/warehouse/:id" component={WarehouseDeatils} /> */}
          <Route path="/warehouse/:action" component={WarehouseModify} />
          {/* <Route path="/warhouses" component={Warehouses} /> */}
          {/* <Route path="/inventory" component={Inventory} /> */}
        </Switch>
        <h1>Footer Mockup</h1>
      </div>
    </Router>
  );
}

export default App;
