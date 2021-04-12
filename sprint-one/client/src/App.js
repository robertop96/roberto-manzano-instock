import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import InventoryList from './components/InventoryList/InventoryList';
import WarehouseModify from './pages/WarehouseModify/WarehouseModify';
import InventoryModify from './pages/InventoryModify/InventoryModify';
import Warehouse from './components/Warehouse/Warehouse';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import WarehouseDetails from './components/WarehouseDeatils/WarehouseDetails';
import InventoryItemDetails from './components/InventoryItemDetails/InventoryItemDetails';

function App() {
  return (
    <Router>
      <section>
        <Header />

        <Switch>
          {/* <Route path="/" component={Home} /> */}
          <Route exact path="/warehouse/:id" component={WarehouseDetails} />
          <Route exact path="/" component={Warehouse} />
          <Route exact path="/inventory" component={InventoryList} />
          <Route exact path="/inventory/:id" component={InventoryItemDetails} />
          <Route
            exact
            path="/warehouses/modify/:id/"
            component={WarehouseModify}
          />
          <Route
            exact
            path="/inventory/modify/:id"
            component={InventoryModify}
          />
        </Switch>
        <Footer />

      </section>
    </Router>
  );
}

export default App;
