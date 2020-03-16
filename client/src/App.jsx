import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import Profile from './views/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './views/home';
import Leagues from './views/leagues';
import Login from './views/Login';
import signup from './views/Signup';
import ClubInfo from './views/Club';
import ProfileEditView from './views/EditProfile';
import LeagueTable from './views/LeagueTable';

import NavBar from './Components/Navbar';

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
          <Route path="/league/id/:id" component={LeagueTable} />
          <Route path="/club/id/:id" component={ClubInfo} />
          <Route path="/profile/edit" component={ProfileEditView} exact />
        </Switch>
      </BrowserRouter>
      <footer>
        <span>© January 2020 IronHackers </span>
        <div>
          <p>Web Development by António Penalva, Dan Burton and Filipe Nunes</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
