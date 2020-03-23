import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Form } from 'semantic-ui-react';
import './style.scss';
import { getTeamInfo } from './../../services/api-services';
import { getPrediction, getAllPredictions } from './../../services/prediction';

export class PredictScore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeTeamBadge: null,
      awayTeamBadge: null,
      predictionPick: '',
      porcentageHome: 40,
      porcentageAway: 40,
      porcentageDraw: 20
    };
    this.handleChange = this.handleChange.bind(this);
  }
  async componentDidMount() {
    const userId = this.props._id;
    const matchId = this.props.idEvent;
    // console.log(userId, matchId);

    // console.log('im running');
    try {
      const prediction = await getPrediction(userId, matchId);
      const predictionPick = prediction.prediction;
      console.log(predictionPick);
      //console.log(prediction);

      const allPredictions = await getAllPredictions(matchId);
      console.log(allPredictions);
      if (allPredictions) {
        const numberOfPredictions = allPredictions.length;
        const porcentageHome =
          (allPredictions.filter(prediction => prediction.prediction === 'Home').length /
            numberOfPredictions) *
          100;

        const porcentageAway =
          (allPredictions.filter(prediction => prediction.prediction === 'Away').length /
            numberOfPredictions) *
          100;

        const porcentageDraw =
          (allPredictions.filter(prediction => prediction.prediction === 'Draw').length /
            numberOfPredictions) *
          100;

        console.log(porcentageHome, porcentageAway, porcentageDraw);

        this.setState({ porcentageHome, porcentageAway, porcentageDraw });
      }

      const homeTeamID = this.props.idHomeTeam;
      const awayTeamID = this.props.idAwayTeam;
      const homeTeamInfo = await getTeamInfo(homeTeamID);
      const awayTeamInfo = await getTeamInfo(awayTeamID);
      //console.log(homeTeamInfo)
      const homeTeamBadge = homeTeamInfo.data.teams[0].strTeamBadge;
      const awayTeamBadge = awayTeamInfo.data.teams[0].strTeamBadge;
      this.setState({
        homeTeamBadge,
        awayTeamBadge,
        predictionPick
      });
    } catch (error) {
      console.log(error);
    }
  }

  handleChange = (e, { value }) => {
    console.log(value);
    const predictionPick = value;
    this.setState({ predictionPick });
  };

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
            now={this.state.porcentageHome}
            key={1}
          />
          <ProgressBar
            className="barNames"
            label="D"
            variant="warning"
            now={this.state.porcentageDraw}
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
            now={this.state.porcentageAway}
            key={3}
          />
        </ProgressBar>

        <Form>
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
        </Form>
      </div>
    );
  }
}

export default PredictScore;
