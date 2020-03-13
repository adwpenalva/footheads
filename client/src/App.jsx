import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import Profile from './views/Profile';
import Home from './views/home';
import Leagues from './views/leagues';
import NavBar from './Components/Navbar';
import Login from './views/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import signup from './views/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/leagues" component={Leagues} />
          <Route path="/login" component={Login} exact />
          <Route path="/sign-up" component={signup} exact />
          <Route path="/profile" component={Profile} exact />
        </Switch>
      </BrowserRouter>
      <footer>
        <span>© January 2020 IronHackers </span>
        <div>
          <p>Web Development by Sofia Franek, Raquel Coelho & Filipe Nunes</p>
          <p>Data Analytics by José Pereira & Tiago Dias</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
