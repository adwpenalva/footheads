import React, { Component, Fragment } from 'react';
import './style.scss';
import { editUserInformation } from './../../services/authentication';
import { allSoccerLeagues, getAllLeagueInfo } from './../../services/api-services';

class EditProfileView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      picture: '',
      favoritePlayer: '',
      bio: '',
      soccerLeagues: [],
      selectedSoccerLeauge: '',
      teamsInLeague: null,
      favoriteTeam: '',
      best1: '',
      best2: '',
      best3: '',
      best4: '',
      best5: '',
      best6: '',
      best7: '',
      best8: '',
      best9: '',
      best10: '',
      best11: '',
      best11Form: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
    this.handleFileInputChange = this.handleFileInputChange.bind(this);
    this.userSelecteadLeague = this.userSelecteadLeague.bind(this);
    this.lookForTeams = this.lookForTeams.bind(this);
    this.userSelectedTeam = this.userSelectedTeam.bind(this);
    this.toggleDreamTeam = this.toggleDreamTeam.bind(this);
    console.log('^props here', this.props);
  }

  async componentDidMount() {
    try {
      const soccerLeagues = await allSoccerLeagues();
      this.setState({ soccerLeagues });
      //console.log(soccerLeagues);
    } catch (error) {
      console.log(error);
    }

    this.setState({
      // ...this.props.user
      name: this.props.user.name,
      email: this.props.user.email,
      picture: this.props.user.picture,
      favoritePlayer: this.props.user.favoritePlayer,
      bio: this.props.user.bio,
      favoriteTeam: this.props.user.favoriteTeam,
      best1: this.props.user.best1,
      best2: this.props.user.best2,
      best3: this.props.user.best3,
      best4: this.props.user.best4,
      best5: this.props.user.best5,
      best6: this.props.user.best6,
      best7: this.props.user.best7,
      best8: this.props.user.best8,
      best9: this.props.user.best9,
      best10: this.props.user.best10,
      best11: this.props.user.best11
    });
    console.log('ôn mount', this.props);
  }

  async handleFormSubmission(event) {
    event.preventDefault();
    const {
      name,
      best1,
      best2,
      best3,
      best4,
      best5,
      best6,
      best7,
      best8,
      best9,
      best10,
      best11,
      email,
      picture,
      favoritePlayer,
      bio,
      favoriteTeam
    } = this.state;
    try {
      const user = await editUserInformation({
        name,
        email,
        picture,
        favoritePlayer,
        bio,
        favoriteTeam,
        best1,
        best2,
        best3,
        best4,
        best5,
        best6,
        best7,
        best8,
        best9,
        best10,
        best11
      });
      console.log('^the new user', user);
      this.props.updateUserInformation(user);
      this.props.history.push('/profile');
    } catch (error) {
      console.log(error);
    }
  }

  async lookForTeams(leagueID) {
    try {
      const response = await getAllLeagueInfo(leagueID);
      const teamsInLeague = response.teams;
      this.setState({ teamsInLeague });
    } catch (error) {
      console.log(error);
    }
  }

  userSelecteadLeague(event) {
    const selectedSoccerLeauge = event.target.value;
    this.setState({ selectedSoccerLeauge });
    this.lookForTeams(selectedSoccerLeauge);
    //console.log(selectedSoccerLeauge);
  }

  async userSelectedTeam(event) {
    const favoriteTeam = event.target.value;
    console.log('userSelectedTeam console log, here should be ID:', favoriteTeam);
    try {
      this.setState({ favoriteTeam });
      console.log('here is the state console log, should be team ID:', this.state.favoriteTeam);
    } catch (error) {
      throw error;
    }
    // this.handleInputChange;
  }

  handleFileInputChange(event) {
    console.dir(event.target);
    const { name, files } = event.target;
    this.setState({
      [name]: files[0]
    });
  }

  toggleDreamTeam(event) {
    event.preventDefault();
    this.setState(previousState => ({
      best11Form: !previousState.best11Form
    }));
  }

  handleInputChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    // const user = this.props.user;
    //console.log(this.state.teamsInLeague);
    return (
      <div className="profile__edit">
        {this.props.user && (
          <div>
            <figure>
              <img
                className="profile__edit__img"
                src={this.props.user.picture}
                alt={this.props.user.name}
              />
            </figure>
            <form onSubmit={this.handleFormSubmission} className="form__style">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                onChange={this.handleInputChange}
                value={this.state.name}
              />
              <label htmlFor="favoritePlayer">Favorite Player</label>
              <input
                id="favoritePlayer"
                name="favoritePlayer"
                type="text"
                placeholder="Your favorite player"
                onChange={this.handleInputChange}
                value={this.state.favoritePlayer}
              />
              {this.state.soccerLeagues && (
                <Fragment>
                  <label htmlFor="selectedLeuage">Select your League</label>
                  <select
                    value={this.state.selectedSoccerLeauge}
                    onChange={this.userSelecteadLeague}
                  >
                    <option value="0">Select The League of Your Team</option>
                    {this.state.soccerLeagues.map(league => (
                      <option value={league.idLeague}>{league.strLeague}</option>
                    ))}
                  </select>
                </Fragment>
              )}
              {this.state.teamsInLeague && (
                <Fragment>
                  <label htmlFor="favoriteTeam">Select your Team</label>
                  <select value={this.state.selectedTeam} onChange={this.userSelectedTeam}>
                    <option value="0">Select your Team</option>
                    {this.state.teamsInLeague.map(team => (
                      <option value={team.idTeam}>{team.strTeam}</option>
                    ))}
                  </select>
                </Fragment>
              )}
              <hr />
              <button onClick={this.toggleDreamTeam}>Pick your DreamTeam!</button>
              {this.state.best11Form && (
                <Fragment>
                  <label htmlFor="best1">DreamTeam Goalkeeper</label>
                  <input
                    id="best1"
                    name="best1"
                    type="text"
                    placeholder="Your favorite goalkeeper"
                    onChange={this.handleInputChange}
                    value={this.state.best1}
                  />
                  <label htmlFor="best2">DreamTeam Right Back</label>
                  <input
                    id="best2"
                    name="best2"
                    type="text"
                    placeholder="Your favorite right back"
                    onChange={this.handleInputChange}
                    value={this.state.best2}
                  />
                  <label htmlFor="best3">DreamTeam Center Back 1</label>
                  <input
                    id="best3"
                    name="best3"
                    type="text"
                    placeholder="Your favorite center back"
                    onChange={this.handleInputChange}
                    value={this.state.best3}
                  />
                  <label htmlFor="best4">DreamTeam Center Back 2</label>
                  <input
                    id="best4"
                    name="best4"
                    type="text"
                    placeholder="Your favorite center back"
                    onChange={this.handleInputChange}
                    value={this.state.best4}
                  />
                  <label htmlFor="best6">DreamTeam Left Back</label>
                  <input
                    id="best6"
                    name="best6"
                    type="text"
                    placeholder="Your favorite left back"
                    onChange={this.handleInputChange}
                    value={this.state.best6}
                  />
                  <label htmlFor="best5">DreamTeam Defensive Middlefielder</label>
                  <input
                    id="best5"
                    name="best5"
                    type="text"
                    placeholder="Your favorite defensive middlefielder"
                    onChange={this.handleInputChange}
                    value={this.state.best5}
                  />
                  <label htmlFor="best8">DreamTeam Central Middlefielder</label>
                  <input
                    id="best8"
                    name="best8"
                    type="text"
                    placeholder="Your favorite central middlefielder"
                    onChange={this.handleInputChange}
                    value={this.state.best8}
                  />
                  <label htmlFor="best7">DreamTeam Offensive Middlefielder</label>
                  <input
                    id="best7"
                    name="best7"
                    type="text"
                    placeholder="Your favorite offensive middlefielder"
                    onChange={this.handleInputChange}
                    value={this.state.best7}
                  />
                  <label htmlFor="best10">DreamTeam Offensive Middlefielder 2</label>
                  <input
                    id="best10"
                    name="best10"
                    type="text"
                    placeholder="Your favorite offensive middlefielder"
                    onChange={this.handleInputChange}
                    value={this.state.best10}
                  />
                  <label htmlFor="best9">DreamTeam Striker</label>
                  <input
                    id="best9"
                    name="best9"
                    type="text"
                    placeholder="Your favorite striker"
                    onChange={this.handleInputChange}
                    value={this.state.best9}
                  />
                  <label htmlFor="best11">DreamTeam Striker 2</label>
                  <input
                    id="best11"
                    name="best11"
                    type="text"
                    placeholder="Your favorite striker"
                    onChange={this.handleInputChange}
                    value={this.state.best11}
                  />
                </Fragment>
              )}
              <hr />
              <label htmlFor="bio">Bio</label>
              <textarea
                id="bio"
                name="bio"
                placeholder="Tell us a little bit about you"
                onChange={this.handleInputChange}
                value={this.state.bio}
              />
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                onChange={this.handleInputChange}
                value={this.state.email}
              />
              <label htmlFor="picture">Profile Picture</label>
              <input
                type="file"
                id="picture"
                name="picture"
                onChange={this.handleFileInputChange}
              />
              <button>Update Profile</button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default EditProfileView;
