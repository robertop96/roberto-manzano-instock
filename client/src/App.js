import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Warehouse from './pages/Warehouse';
import WarehouseDetails from './pages/WarehouseDetails';
import Inventory from './pages/Inventory';
import InventoryDetails from './pages/InventoryDetails';
import ModifyWarehouse from './pages/ModifyWarehouse';
import ModifyInventory from './pages/ModifyInventory';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <main className="main">
        <Switch>
          <Route exact path="/" component={Warehouse} />
          <Route exact path="/warehouse/:id" component={WarehouseDetails} />
          <Route exact path="/inventory" component={Inventory} />
          <Route exact path="/inventory/:id" component={InventoryDetails} />
          <Route exact path="/warehouses/modify/add" component={ModifyWarehouse} />
          <Route exact path="/warehouses/modify/:id/" component={ModifyWarehouse} />
          <Route exact path="/inventory/modify/add" component={ModifyInventory} />
          <Route exact path="/inventory/modify/:id" component={ModifyInventory} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
