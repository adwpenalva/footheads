import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import Profile from './views/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './views/home';
import Leagues from './views/leagues';
import Login from './views/Login';
import Signup from './views/Signup';
import ClubInfo from './views/Club';
import ProfileEditView from './views/EditProfile';
import LeagueTable from './views/LeagueTable';
import Blog from './views/Blog';
import EditProfileView from './views/EditProfile';

import ProtectedRoute from './Components/ProtectedRoute.jsx';

import NavBar from './Components/Navbar';

import { loadUserInformation } from './services/authentication';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      user: null
    };
    this.updateUserInformation = this.updateUserInformation.bind(this);
  }

  componentDidMount() {
    loadUserInformation()
      .then(user => {
        this.updateUserInformation(user);
        this.setState({
          loaded: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  updateUserInformation(user) {
    this.setState({
      user
    });
  }

  render() {
    console.log('state user in app', this.state.user);
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar user={this.state.user} updateUserInformation={this.updateUserInformation} />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/leagues" component={Leagues} />
            <Route
              path="/login"
              exact
              redirect={'/'}
              render={props => (
                <Login {...props} updateUserInformation={this.updateUserInformation} />
              )}
            />
            <Route
              path="/sign-up"
              exact
              redirect={'/'}
              render={props => (
                <Signup {...props} updateUserInformation={this.updateUserInformation} />
              )}
            />
            <Route path="/league/id/:id" component={LeagueTable} />
            <Route
              path="/club/id/:id"
              redirect={'/'}
              render={props => <ClubInfo {...props} user={this.state.user} />}
            />
            <ProtectedRoute
              path="/profile/edit"
              authorized={this.state.user}
              redirect={'/login'}
              render={props => <EditProfileView {...props} user={this.state.user} />}
            />
            {/* <Route
              path="/profile/edit"
              exact
              render={props => <EditProfileView {...props} user={this.state.user} />}
            /> */}
            <Route
              path="/blog"
              exact
              render={props => <Blog {...props} user={this.state.user} />}
            />
            <Route path="/profile" component={Profile} exact />
          </Switch>
        </BrowserRouter>
        <footer>
          <span>© January 2020 IronHackers </span>
          <div>
            <p>Developed by António Penalva, Dan Burton & Filipe Nunes</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
