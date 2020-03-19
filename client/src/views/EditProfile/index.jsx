import React, { Component } from 'react';
import './style.scss';
import { editUserInformation } from './../../services/authentication';
import { Route, Redirect } from 'react-router-dom';

class EditProfileView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      picture: '',
      favoritePlayer: '',
      bio: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
    this.handleFileInputChange = this.handleFileInputChange.bind(this);
    console.log('^props here', this.props);
  }

<<<<<<< HEAD
=======
  componentDidMount() {
    this.setState({
      // ...this.props.user
      name: this.props.user.name,
      email: this.props.user.email,
      picture: this.props.user.picture,
      favoritePlayer: this.props.user.favoritePlayer,
      bio: this.props.user.bio
    });
    console.log('ôn mount', this.props);
  }

>>>>>>> 818292e44dfec63c5d1b94ec24146d6f42197a7f
  async handleFormSubmission(event) {
    event.preventDefault();
    const { name, email, picture, favoritePlayer, bio } = this.state;
    try {
      const user = await editUserInformation({
        name,
        email,
        picture,
        favoritePlayer,
        bio
      });
      console.log('^the new user', user);
      this.props.updateUserInformation(user);
      this.props.history.push('/profile');
    } catch (error) {
      console.log(error);
    }
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
    // console.log("ûser here", user)
    return (
      <div>
        {this.props.user && (
          <div>
            <figure>
              <img
                className="profile-img"
                src={this.props.user.picture}
                alt={this.props.user.name}
              />
            </figure>
            <form onSubmit={this.handleFormSubmission}>
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
