import './App.css';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';

const login = lazy(() => import('./pages/Login') )

function App() {
  return (
    <div className="app">
      <Router>
        <Link to="/login">Login</Link>
        <Suspense fallback={<h3>Loading...</h3>}>
          <Switch>
            <Route path={ROUTES.LOGIN} component={login}></Route>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
