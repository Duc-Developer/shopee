import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import HomePage from './pages/HomePage';
import HeaderComponent from './features/HeaderComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Router>
        <Redirect exact to="/home" />
        <Switch>
          <Route exact path="/home">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
