import React, { Component } from 'react';
import { getTeamInfo, getNext5FixturesByTeamId } from '../../services/api-services';
import CommentList from './../../Components/commentList';
import CommentInput from './../../Components/InputComment';
import PredictScoreBar from './../../Components/PredictScore';
import './style.scss';

import { createComment } from './../../services/comment';
import { listComments } from './../../services/comment';
import { deleteComment } from './../../services/comment';
import { postPrediction } from './../../services/prediction';

export default class ClubInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      club: null,
      fixtures: null,
      comments: null,
      shown: false,
      predictions: []
    };
    this.handleCommentAddition = this.handleCommentAddition.bind(this);
    this.handleCommentRemoval = this.handleCommentRemoval.bind(this);
    this.commentFinder = this.commentFinder.bind(this);
  }
  componentDidMount() {
    console.log('help - user should be here', this.props.user);
    const id = this.props.match.params.id;
    this.commentFinder(this.props.match.params.id);
    console.log(this.props.match.params);
    getTeamInfo(id)
      .then(information => {
        this.setState({
          club: information.data.teams
        });
      })
      .catch(error => console.log(error));
    getNext5FixturesByTeamId(id)
      .then(fixture => {
        this.setState({
          fixtures: fixture.data.events
        });
      })
      .catch(error => console.log(error));
  }

  async commentFinder(club) {
    try {
      const clubComments = await listComments(club);
      console.log('here are the comments', clubComments);
      this.setState({
        comments: clubComments
      });
    } catch (error) {
      console.log(error);
    }
  }

  async handleCommentAddition(comment) {
    try {
      const commentDone = await createComment(this.state.club[0].idTeam, comment.content);
      console.log('comment created', commentDone);
      if (!this.state.comments) {
        this.setState({
          comments: [commentDone.comment]
        });
      } else {
        this.setState({
          comments: [commentDone.comment, ...this.state.comments]
        });
      }
    } catch (error) {
      console.log(error);
      console.log('Error in service.');
    }
  }

  async handleCommentRemoval(id) {
    const remainingComments = this.state.comments.filter(comment => comment._id !== id);
    this.setState({
      comments: remainingComments
    });
    try {
      const commentDeleted = await deleteComment(id);
      console.log('comment deleted', commentDeleted);
    } catch (error) {
      console.log(error);
      console.log('Error in service.');
    }
  }

  render() {
    console.log('state comments', this.state.comments);
    return (
      <div>
        {this.state.club &&
          this.state.club.map(val => {
            return (
              <div className="club" key={val.idTeam}>
                {val.strTeamBanner && (
                  <img className="club__banner" src={val.strTeamBanner} alt={val.strTeam} />
                )}
                <div className="club__description">
                  <h1>{val.strTeam}</h1>
                  <p>
                    <i>{val.strAlternate} </i>
                  </p>
                  <p> Formed in {val.intFormedYear} </p>
                  <p>
                    {val.strLeague}, {val.strCountry}
                  </p>
                </div>
                <div className="club__badge__jersey">
                  <img className="club__badge" src={val.strTeamBadge} alt={val.strTeam} />
                  <img className="club__jersey" src={val.strTeamJersey} alt={val.strTeam} />
                </div>
                <h2>Next Fixtures</h2>
                {this.state.fixtures &&
                  this.state.fixtures.map(event => {
                    return (
                      <div key={event.idEvent}>
                        <table>
                          <thead>
                            <tr>
                              <th>{event.strDate}</th>
                              <th>{event.strEvent}</th>
                              <th>{event.strTime}</th>
                            </tr>
                          </thead>
                        </table>
                        <PredictScoreBar {...event} {...this.props.user} />
                      </div>
                    );
                  })}

                <div>
                  <div className="club__comment__input">
                    <h6>Comments:</h6>
                    {this.props.user && <CommentInput addComment={this.handleCommentAddition} />}
                    <div className="center">
                      {this.props.user && (
                        <CommentList
                          comments={this.state.comments}
                          removeComment={this.handleCommentRemoval}
                          user={this.props.user}
                        />
                      )}
                    </div>
                  </div>
                  <article className="club__information">
                    <h5>Find out a bit about {val.strTeam}:</h5>
                    <p>
                      {this.state.shown
                        ? val.strDescriptionEN
                        : val.strDescriptionEN.substring(0, 250) + '...'}
                    </p>
                    {(!this.state.shown && (
                      <button onClick={() => this.setState({ shown: true })}>Show more</button>
                    )) || (
                      <button onClick={() => this.setState({ shown: false })}>Show less</button>
                    )}
                  </article>
                  <p>
                    {val.strStadium} - {val.strStadiumLocation}
                  </p>
                  <p>Capacity: {val.intStadiumCapacity}</p>
                  <img className="stadiumImage" src={val.strStadiumThumb} alt={val.strStadium} />
                  <br />
                  <small>Social Media</small>
                  <div className="club__external__links">
                    {/*<button onClick={e => this.props.history.push('facebook.com')}>
                    facebook test
                  </button>*/}
                    {val.strWebsite && (
                      <a href={`https://${val.strWebsite}`}>
                        <img
                          className="club__social__links"
                          src="/images/www.png"
                          alt="official website"
                        />
                      </a>
                    )}
                    {val.strFacebook && (
                      <a href={`https://${val.strFacebook}`}>
                        <img
                          className="club__social__links"
                          src="/images/facebook.png"
                          alt="facebook"
                        />
                      </a>
                    )}
                    {val.strTwitter && (
                      <a href={`https://${val.strTwitter}`}>
                        <img
                          className="club__social__links"
                          src="/images/twitter.png"
                          alt="twitter"
                        />
                      </a>
                    )}
                    {val.strInstagram && (
                      <a href={`https://${val.strInstagram}`}>
                        <img
                          className="club__social__links"
                          src="/images/instagram-sketched.png"
                          alt="instagram"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}
