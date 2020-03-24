import React, { Component } from 'react';
import { getUserInfo } from './../../services/user';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ''
    };
  }

  async componentDidMount() {
    let authorId = this.props.match.params.Id;
    try {
      let user = await getUserInfo(authorId);
      this.setState({
        user
      });
    } catch (error) {
      console.log(error);
    }
    console.log('CONSOLE LOG USER BIO:', this.state.user);
  }

  render() {
    return (
      <div>
        {this.state.user && <h1>USER PROFILE TEST</h1>}
        {this.state.user && <h2>{this.state.user.name}</h2>}
        {this.state.user}
      </div>
    );
  }
}

export default UserProfile;
