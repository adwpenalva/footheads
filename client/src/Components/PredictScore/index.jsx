import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Form } from 'semantic-ui-react';
import './style.scss';
import { getTeamInfo } from './../../services/api-services';
import { getPrediction, getAllPredictions, postPrediction } from './../../services/prediction';

export class PredictScore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeTeamBadge: null,
      awayTeamBadge: null,
      predictionPick: '',
      percentageHome: 40,
      percentageAway: 40,
      percentageDraw: 20,
      showButton: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.postPredictionTeste = this.postPredictionTeste.bind(this);
    this.updatePredictionsBar = this.updatePredictionsBar.bind(this);
  }
  async componentDidMount() {
    const userId = this.props._id;
    const matchId = this.props.idEvent;
    try {
      const homeTeamID = this.props.idHomeTeam;
      const awayTeamID = this.props.idAwayTeam;
      const homeTeamInfo = await getTeamInfo(homeTeamID);
      const awayTeamInfo = await getTeamInfo(awayTeamID);
      //console.log(homeTeamInfo)
      const homeTeamBadge = homeTeamInfo.data.teams[0].strTeamBadge;
      const awayTeamBadge = awayTeamInfo.data.teams[0].strTeamBadge;
      const prediction = await getPrediction(userId, matchId);
      const predictionPick = prediction.prediction;
      console.log(predictionPick);
      //console.log(prediction);
      this.updatePredictionsBar();
      console.log('component did mount is running');

      this.setState({
        homeTeamBadge,
        awayTeamBadge,
        predictionPick
      });
    } catch (error) {
      console.log('here is the error', error);
    }
  }

  async updatePredictionsBar() {
    const homeTeamID = this.props.idHomeTeam;
    const awayTeamID = this.props.idAwayTeam;
    const homeTeamInfo = await getTeamInfo(homeTeamID);
    const awayTeamInfo = await getTeamInfo(awayTeamID);
    //console.log(homeTeamInfo)
    const homeTeamBadge = homeTeamInfo.data.teams[0].strTeamBadge;
    const awayTeamBadge = awayTeamInfo.data.teams[0].strTeamBadge;
    const matchId = this.props.idEvent;
    const allPredictions = await getAllPredictions(matchId);
    console.log(allPredictions);
    if (allPredictions) {
      const numberOfPredictions = allPredictions.length;
      const percentageHome =
        (allPredictions.filter(prediction => prediction.prediction === 'Home').length /
          numberOfPredictions) *
        100;

      const percentageAway =
        (allPredictions.filter(prediction => prediction.prediction === 'Away').length /
          numberOfPredictions) *
        100;

      const percentageDraw =
        (allPredictions.filter(prediction => prediction.prediction === 'Draw').length /
          numberOfPredictions) *
        100;

      console.log(percentageHome, percentageAway, percentageDraw);

      this.setState({
        percentageHome,
        percentageAway,
        percentageDraw,
        homeTeamBadge,
        awayTeamBadge,
        showButton: false
      });
    }
  }

  handleChange = (e, { value }) => {
    console.log(value);
    const predictionPick = value;
    this.setState({ predictionPick });
  };

  async postPredictionTeste(event) {
    event.preventDefault();
    console.log('im running');
    const userId = this.props._id;
    const matchId = this.props.idEvent;
    const mockPrediction = {
      userId,
      matchId,
      prediction: this.state.predictionPick
    };
    try {
      const predictionDone = await postPrediction(mockPrediction);
      this.updatePredictionsBar();
      //console.log(predictionDone);
    } catch (error) {
      console.log(error);
    }

    // const commentDone = await createComment(this.state.club[0].idTeam, comment.content);
    // const sendPostPrediction = await postPrediction();
    // const prediction = 'VH';
    // const user_id = this.props.user._id;
    // this.state.fixtures.map(fixture => {
    //   console.log(fixture.idEvent);
    //   sendPostPrediction(user_id, fixture.idEvent, prediction);
    // });

    // console.log('this.state.fixtures');
    // console.log(this.state.fixtures);
  }

  render() {
    const { predictionPick } = this.state;
    const homeTeamBadge = this.state.homeTeamBadge;
    const awayTeamBadge = this.state.awayTeamBadge;
    // const strAwayTeam = event.strAwayTeam;
    // const strHomeTeam = event.strHomeTeam;
    return (
      <div>
        <ProgressBar className="comparison-bar">
          <ProgressBar
            className="barNames"
            label={
              homeTeamBadge && (
                <img
                  style={{ width: '10vh', margin: '0 auto' }}
                  src={homeTeamBadge}
                  alt="homeTeamBadge"
                />
              )
            }
            variant="success"
            now={this.state.percentageHome}
            key={1}
          />
          <ProgressBar
            className="barNames"
            label="Draw"
            variant="warning"
            now={this.state.percentageDraw}
            key={2}
          />
          <ProgressBar
            className="barNames"
            label={
              awayTeamBadge && (
                <img
                  style={{ width: '10vh', margin: '0 auto' }}
                  src={awayTeamBadge}
                  alt="awayTeamBadge"
                />
              )
            }
            variant="danger"
            now={this.state.percentageAway}
            key={3}
          />
        </ProgressBar>

        <Form className="predictions__radio" onSubmit={this.postPredictionTeste}>
          <label>Predict the Score</label>
          <Form.Group inline>
            <Form.Radio
              className="predictTheScore"
              label={this.props.strHomeTeam}
              value="Home"
              checked={predictionPick === 'Home'}
              onChange={this.handleChange}
            />
            <Form.Radio
              className="predictTheScore"
              label="Draw"
              value="Draw"
              checked={predictionPick === 'Draw'}
              onChange={this.handleChange}
            />
            <Form.Radio
              className="predictTheScore"
              label={this.props.strAwayTeam}
              value="Away"
              checked={predictionPick === 'Away'}
              onChange={this.handleChange}
            />
          </Form.Group>
          {this.state.showButton && <button>Submit prediction</button>}
        </Form>
      </div>
    );
  }
}

export default PredictScore;

{
  /* {props.user._id === comment.author._id && (
  <button onClick={() => props.removeComment(comment._id)}>delete</button>
)}
</div> */
}
