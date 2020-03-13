import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

export default class Leagues extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link style={{ color: 'inherit' }}>Premier League</Link>
          </li>
          <li>
            <Link style={{ color: 'inherit' }}>Premier League</Link>
          </li>
          <li>
            <Link style={{ color: 'inherit' }}>Premier League</Link>
          </li>
          <li>
            <Link style={{ color: 'inherit' }}>Premier League</Link>
          </li>
          <li>
            <Link style={{ color: 'inherit' }}>Premier League</Link>
          </li>
          <li>
            <Link style={{ color: 'inherit' }}>Premier League</Link>
          </li>
          <li>
            <Link style={{ color: 'inherit' }}>Premier League</Link>
          </li>
          <li>
            <Link style={{ color: 'inherit' }}>Premier League</Link>
          </li>
        </ul>
      </div>
    );
  }
}
