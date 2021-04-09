import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Home from './pages/Home/Home';

import WarehouseModify from './pages/WarehouseModify/WarehouseModify';
import Warehouse from "./components/Warehouse/Warehouse"
import Header from './components/Header/Header';
import InventoryList from "./components/InventoryList/InventoryList"
import Footer from './components/Footer/Footer';
import DeleteModal from "./components/DeleteModal/DeleteModal";


function App() {
  return (
    
    <Router>
      <section>
        <Header />

        

        

        <Switch>
          {/* <Route path="/" component={Home} /> */}
          <Route path="/warehouse" component={Warehouse} />
          <Route path="/warehouses/:action" component={WarehouseModify} />
          <Route path="/inventory" component={InventoryList} />
          {/* <Route path="/placeholder" component={PLACEHOLDER} /> */}
           <Route path="/warehouse/:action" component={DeleteModal} />
        </Switch>
        <Footer />
      </section>
    </Router>
  );
}

export default App;
