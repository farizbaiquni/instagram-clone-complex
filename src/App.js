import './App.css';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import useAuthListener from './hooks/use-auth-listener'
import UserContext from './context/userContext'
import ProtectedRoute from './helpers/protected-route'
import IsUserLoggedInRoute from './helpers/is-User-Logged-In-Route'

const Dashboard = lazy(()=> import('./pages/Dashboard'))
const Profile = lazy(() => import('./pages/Profile'))
const Login = lazy(() => import('./pages/Login') )
const SignUp = lazy(() => import('./pages/Signup'))
const Notfound = lazy(() => import('./pages/NotFound'))

function App() {

  const user = useAuthListener()
  
  return (
    <UserContext.Provider value={user}>
      <div className=" app">
        <Router>
          <Suspense fallback={<h3>Loading...</h3>}>
            <Switch>
              <ProtectedRoute user={user} path={ROUTES.DASHBOARD} exact>
                <Dashboard/>
              </ProtectedRoute>
              <Route path={ROUTES.PROFILE} component={Profile} />
              <IsUserLoggedInRoute user={user} loggedInPath={ROUTES.DASHBOARD} path={ROUTES.LOGIN}>
                <Login/>
              </IsUserLoggedInRoute>
              <IsUserLoggedInRoute user={user} loggedInPath={ROUTES.DASHBOARD} path={ROUTES.SIGN_UP}>
                <SignUp/>
              </IsUserLoggedInRoute>
              <Route component={Notfound}></Route>
            </Switch>
          </Suspense>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
