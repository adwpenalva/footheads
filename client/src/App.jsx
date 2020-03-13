import React from 'react';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import home from './views/home';
import './App.scss';
import NavBar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <NavBar />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={home} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
