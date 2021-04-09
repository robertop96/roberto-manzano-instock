import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Home from './pages/Home/Home';
import WarehouseModify from './pages/WarehouseModify/WarehouseModify';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <section>
        <Header />
        <Switch>
          {/* <Route path="/" component={Home} /> */}
          {/* <Route path="/warhouses" component={Warehouses} /> */}
          <Route path="/warehouse/:action" component={WarehouseModify} />
          {/* <Route path="/inventory" component={Inventory} /> */}
          {/* <Route path="/placeholder" component={PLACEHOLDER} /> */}
        </Switch>
        <Footer />
      </section>
    </Router>
  );
}

export default App;
