import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import ROUTES from './routes';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {ROUTES.map((route) =>
            <Route exact={route.exact}
              path={route.path}
              component={route.component} />
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
