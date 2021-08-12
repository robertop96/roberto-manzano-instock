import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Warehouse from './pages/Warehouse';
import WarehouseDetails from './pages/WarehouseDetails';
import InventoryList from './pages/InventoryList';
import InventoryDetails from './pages/InventoryDetails';
import ModifyWarehouse from './pages/ModifyWarehouse';
import ModifyInventory from './pages/ModifyInventory';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Warehouse} />
        <Route exact path="/warehouse/:id" component={WarehouseDetails} />
        <Route exact path="/inventory" component={InventoryList} />
        <Route exact path="/inventory/:id" component={InventoryDetails} />
        <Route exact path="/warehouses/modify/:id/" component={ModifyWarehouse} />
        <Route exact path="/inventory/modify/:id" component={ModifyInventory} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
