import './App.css';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import useAuthListener from './hooks/use-auth-listener'
import UserContext from './context/userContext'

const dashboard = lazy(()=> import('./pages/Dashboard'))
const login = lazy(() => import('./pages/Login') )
const signup = lazy(() => import('./pages/Signup'))
const notfound = lazy(() => import('./pages/NotFound'))

function App() {

  const user = useAuthListener()
  
  return (
    <UserContext.Provider value={user}>
      <div className="app">
        <Router>
          <Suspense fallback={<h3>Loading...</h3>}>
            <Switch>
              <Route path={ROUTES.DASHBOARD} component={dashboard} exact></Route>
              <Route path={ROUTES.LOGIN} component={login}></Route>
              <Route path={ROUTES.SIGN_UP} component={signup}></Route>
              <Route component={notfound}></Route>
            </Switch>
          </Suspense>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
