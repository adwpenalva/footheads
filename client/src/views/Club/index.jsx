import React, { Component } from 'react';
import SingleClub from '../../Components/SingleClub';
import { getAllClubInfo } from './../../services/api-services';

class Club extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <SingleClub />
      </div>
    );
  }
}

export default Club;
