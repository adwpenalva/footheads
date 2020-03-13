import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

export default class Leagues extends Component {
  render() {
    return (
      <div>
        <h1>League Selection</h1>
        <ul>
          <li>
            <Link style={{ color: 'inherit' }}>Premier League</Link>
          </li>
          <li>
            <Link style={{ color: 'inherit' }}>La Liga Santander</Link>
          </li>
          <li>
            <Link style={{ color: 'inherit' }}>Serie A</Link>
          </li>
          <li>
            <Link style={{ color: 'inherit' }}>Ligue 1</Link>
          </li>
          <li>
            <Link style={{ color: 'inherit' }}>Liga NOS</Link>
          </li>
          <li>
            <Link style={{ color: 'inherit' }}>Champions League</Link>
          </li>
          <li>
            <Link style={{ color: 'inherit' }}>Europa League</Link>
          </li>
          <li>
            <Link style={{ color: 'inherit' }}>Premier League</Link>
          </li>
        </ul>
      </div>
    );
  }
}
