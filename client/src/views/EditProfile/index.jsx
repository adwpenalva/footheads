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
      favoriteTeam: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
    this.handleFileInputChange = this.handleFileInputChange.bind(this);
    this.userSelecteadLeague = this.userSelecteadLeague.bind(this);
    this.lookForTeams = this.lookForTeams.bind(this);
    this.userSelectedTeam = this.userSelectedTeam.bind(this);
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
      favoriteTeam: this.props.user.favoriteTeam
    });
    console.log('ôn mount', this.props);
  }

  async handleFormSubmission(event) {
    event.preventDefault();
    const { name, email, picture, favoritePlayer, bio, favoriteTeam } = this.state;
    try {
      const user = await editUserInformation({
        name,
        email,
        picture,
        favoritePlayer,
        bio,
        favoriteTeam
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
