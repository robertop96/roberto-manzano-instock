import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WarehouseDeatils from '../src/components/WarehouseDeatils/WarehouseDetails.jsx';
import InventoryList from './components/InventoryList/InventoryList';
import WarehouseModify from './pages/WarehouseModify/WarehouseModify';
import Warehouse from './components/Warehouse/Warehouse';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import InventoryItemDetails from './components/InventoryItemDetails/InventoryItemDetails';

import WarehouseDetails from './components/WarehouseDeatils/WarehouseDetails';

function App() {
  return (
    <Router>
      <section>
        <Header />
        <Switch>
          <Route exact path="/" component={Warehouse} />
          <Route path="/warehouse/:id" component={WarehouseDeatils} />
          <Route path="/warehouses" component={Warehouse} />
          <Route path="/warehouse/:action" component={WarehouseModify} />
          <Route path="/inventory" component={InventoryList} />

          <Route
            path="/InventoryItemDetails"
            component={InventoryItemDetails}
          />
        </Switch>
        <Footer />
      </section>
    </Router>
  );
}

export default App;
