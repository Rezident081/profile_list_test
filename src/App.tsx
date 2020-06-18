import React from "react";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Index from './routes/Index/';
import UserPage from './routes/UserPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact>
            <Index />
          </Route>
          <Route path='/user/:name' >
            <UserPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
