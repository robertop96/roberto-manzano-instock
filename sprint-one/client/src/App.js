import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Home from './pages/Home/Home';
import WarehouseModify from './pages/WarehouseModify/WarehouseModify';
import Warehouse from "./components/Warehouse/Warehouse"
import Header from './components/Header/Header';

function App() {
  return (
    
    <Router>
      <Header/>
      <Warehouse/>
      <div className="App">
        {/* <h1>NavbarMockup</h1> */}
        <Switch>
          {/* <Route path="/" component={Home} /> */}
          <Route path="/warhouse" component={Warehouse} />
          <Route path="/warehouse/:action" component={WarehouseModify} />
          {/* <Route path="/inventory" component={Inventory} /> */}
          {/* <Route path="/placeholder" component={PLACEHOLDER} /> */}
        </Switch>
        {/* <h1>Footer Mockup</h1> */}
      </div>
    </Router>
  );
}

export default App;
