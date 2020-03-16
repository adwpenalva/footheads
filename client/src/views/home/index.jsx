import React from 'react';
import './style.scss';
function Homepage() {
  return (
    <div>
      <section className="Home">
        <div className="Home__text">
          <h1>It's never been just a game...</h1>
          <span>
            <p>Follow the top leagues, with latest updates, statistics and more….</p>
          </span>
        </div>
      </section>
      <section>
        <h2>Trending Fixtures</h2>
        <div>
          <p>team1 vs team2</p>
          <p>team3 vs team4</p>
          <p>team 5 vs team6</p>
          <p>Hello World</p>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
