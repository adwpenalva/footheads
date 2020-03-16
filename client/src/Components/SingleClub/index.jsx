import React from 'react';
import { Link } from 'react-router-dom';

const SingleClub = () => {
  return (
    <Link to="" className="single__club">
      {/* /leagues/club:id */}
      <figure className="single__club__img">
        <img src="" alt="club name" />
        {/* API Club image ID */}
      </figure>
      <header className="single__club__info">
        <div className="single__display__info">
          <strong>Club Name</strong>
          {/* Club name from API */}
          <p>League Position</p>
          <p>Manager</p>
          <p>Nickname</p>
          <p>Upcoming Fixtures</p>
          <img src="" alt="add stadium image here" />
          <p>Stadium name</p>
          <p>Last starting eleven</p>
          {/* List the starting 11 with links attached to the players profile */}
          <p>Club Legends</p>
          <p>Top Scorer</p>
          <p>Most assists</p>
          <p>Most Clean sheets</p>
        </div>
      </header>
    </Link>
  );
};

export default SingleClub;
