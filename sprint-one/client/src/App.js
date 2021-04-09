import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Home from './pages/Home/Home';
import WarehouseModify from "./pages/WarehouseModify/WarehouseModify";
import Header from "./components/Header/Header";
import DeleteModal from "./components/DeleteModal/DeleteModal";

function App() {
  return (
    <Router>
      <section>
        <Header />
        <DeleteModal />
        <Switch>
          {/* <Route path="/" component={Home} /> */}
          {/* <Route path="/warhouses" component={Warehouses} /> */}
          <Route path="/warehouse/:action" component={WarehouseModify} />
          {/* <Route path="/inventory" component={Inventory} /> */}
          {/* <Route path="/placeholder" component={PLACEHOLDER} /> */}
        </Switch>
      </section>
    </Router>
  );
}

export default App;
