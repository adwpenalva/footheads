import React, { Component } from 'react';

export default class LeagueTable extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}
