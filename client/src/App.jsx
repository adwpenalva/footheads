import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import home from './views/home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={home} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
