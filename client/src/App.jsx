import React from 'react';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import home from './views/home';
import './App.scss';
import login from './views/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import signup from './views/Signup';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={home} exact />
          <Route path="/login" component={login} exact />
          <Route path="/sign-up" component={signup} exact />
        </Switch>
      </BrowserRouter>
      <footer>this is going to be the footer</footer>
    </div>
  );
}

export default App;
