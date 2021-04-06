import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <Switch>
          <Route path="/" component={Home} />
          {/* <Route path="/warhouses" component={Warehouses} /> */}
          {/* <Route path="/inventory" component={Inventory} /> */}
          {/* <Route path="/placeholder" component={PLACEHOLDER} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
