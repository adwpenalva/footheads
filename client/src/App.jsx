import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';

import home from './views/home';
import Leagues from './views/leagues';
import NavBar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={home} exact />
          <Route path="/leagues" component={Leagues} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
