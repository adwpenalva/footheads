import React, { Component } from 'react';
import { getTeamInfo } from '../../services/api-services';

export default class ClubInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      club: null
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);
    getTeamInfo(id)
      .then(information => {
        this.setState({
          club: information.data.teams
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        {this.state.club &&
          this.state.club.map(val => {
            return <h1>{val.strTeam}</h1>;
          })}
      </div>
    );
  }
}
