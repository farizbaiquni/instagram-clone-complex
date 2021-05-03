import './App.css';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';

const login = lazy(() => import('./pages/Login') )
const signup = lazy(() => import('./pages/Signup'))
const notfound = lazy(() => import('./pages/NotFound'))

function App() {
  return (
    <div className="app">
      <Router>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">SignUp</Link></li>
        </ul>
        <Suspense fallback={<h3>Loading...</h3>}>
          <Switch>
            <Route path={ROUTES.LOGIN} component={login}></Route>
            <Route path={ROUTES.SIGN_UP} component={signup}></Route>
            <Route component={notfound}> </Route>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
