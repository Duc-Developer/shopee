import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import HomePage from './pages/HomePage';
import FooterComponent from './features/FooterComponent';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFound';
import ProductsPage from './pages/ProductsPage';
import ProductViewPage from './pages/ProductViewPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Redirect exact from="/" to="/home" />
        <Switch>
          <Route exact path="/home">
            <HomePage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/products">
            <ProductsPage />
          </Route>
          <Route exact path="/products/:id">
            <ProductViewPage />
          </Route>

          <Route component={() => <NotFoundPage />} />
        </Switch>
      <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
