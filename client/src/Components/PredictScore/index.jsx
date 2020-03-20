import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Form } from 'semantic-ui-react';
import './style.scss';
import { getTeamInfo } from './../../services/api-services';

export class PredictScore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeTeamBadge: null,
      awayTeamBadge: null
    };
  }
  async componentDidMount() {
    console.log('im running');
    try {
      const homeTeamID = this.props.idHomeTeam;
      const awayTeamID = this.props.idAwayTeam;
      const homeTeamInfo = await getTeamInfo(homeTeamID);
      const awayTeamInfo = await getTeamInfo(awayTeamID);
      //console.log(homeTeamInfo)
      const homeTeamBadge = homeTeamInfo.data.teams[0].strTeamBadge;
      const awayTeamBadge = awayTeamInfo.data.teams[0].strTeamBadge;
      this.setState({
        homeTeamBadge,
        awayTeamBadge
      });
    } catch (error) {
      console.log(error);
    }
  }

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
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
                  style={{ width: '13%', margin: '0 auto' }}
                  src={homeTeamBadge}
                  alt="homeTeamBadge"
                />
              )
            }
            variant="success"
            now={40}
            key={1}
          />
          <ProgressBar className="barNames" label="Draw" variant="warning" now={20} key={2} />
          <ProgressBar
            className="barNames"
            label={
              awayTeamBadge && (
                <img
                  style={{ width: '13%', margin: '0 auto' }}
                  src={awayTeamBadge}
                  alt="awayTeamBadge"
                />
              )
            }
            variant="danger"
            now={40}
            key={3}
          />
        </ProgressBar>

        <Form>
          <label>Predict the Score</label>
          <Form.Group inline>
            <Form.Radio
              className="predictTheScore"
              label={this.props.strHomeTeam}
              value="WH"
              checked={value === 'WH'}
              onChange={this.handleChange}
            />
            <Form.Radio
              className="predictTheScore"
              label="Draw"
              value="D"
              checked={value === 'D'}
              onChange={this.handleChange}
            />
            <Form.Radio
              className="predictTheScore"
              label={this.props.strAwayTeam}
              value="WA"
              checked={value === 'WA'}
              onChange={this.handleChange}
            />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default PredictScore;
