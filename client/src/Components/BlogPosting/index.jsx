import React, { Component } from 'react';
import { Button, Form, Select, TextArea } from 'semantic-ui-react';
import './style.scss';

const options = [
  { text: 'In-game', value: 'In-game' },
  { text: 'In the stands', value: 'In the stands' },
  { text: 'At the pub', value: 'At the pub' },
  { text: 'At home', value: 'At home' },
  { text: 'Other', value: 'Other' }
];

class BlogPosting extends Component {
  constructor() {
    super();
    this.state = {
      active: false,
      content: '',
      typeOfExperience: ''
    };
    this.togglePost = this.togglePost.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
    this.handleOptionsChange = this.handleOptionsChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  togglePost() {
    this.setState(previousState => ({
      active: !previousState.active
    }));
  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  handleOptionsChange = (e, { value }) => {
    //console.log(value)
    this.setState({ typeOfExperience: value });
  };

  handleFormSubmission(e) {
    e.preventDefault();
    const content = this.state.content;
    const typeOfExperience = this.state.typeOfExperience;
    const post = {
      id: Date.now().toString(),
      content,
      typeOfExperience
    };
    this.props.addPost(post);
    this.setState({
      content: '',
      typeOfExperience: ''
    });
  }

  render() {
    //const { value } = this.state;
    return (
      <div className="blog-container">
        <div className="blog-description">
          <h1>Blog</h1>
          <h6>
            Share an experience that you had during a football game, with various options of places
            and situations.
          </h6>
          <button onClick={this.togglePost}> Enter your experience</button>
        </div>

        {this.state.active && (
          <Form onSubmit={this.handleFormSubmission}>
            <Form.Group widths="equal">
              <Form.Field
                control={Select}
                name="typeOfExperience"
                label="Type of experience"
                onChange={this.handleOptionsChange}
                value={this.state.typeOfExperience}
                options={options}
                placeholder="Type of experience"
              />
            </Form.Group>
            <Form.Field
              control={TextArea}
              label="The experience itself"
              onChange={this.handleInputChange}
              value={this.state.content}
              name="content"
              placeholder="Tell us more about your experience..."
            />
            <Form.Field className="button" control={Button}>
              Submit experience
            </Form.Field>
          </Form>
        )}
      </div>
    );
  }
}

export default BlogPosting;
