import React, { Component } from 'react';
import { Form, TextArea } from 'semantic-ui-react';
import './style.scss';

class commentInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentOfComment: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleFormSubmission(event) {
    event.preventDefault();
    const content = this.state.contentOfComment;
    if (!content) return;
    const comment = {
      id: Date.now().toString(),
      content
    };
    this.props.addComment(comment);
    this.setState({
      contentOfComment: ''
    });
  }

  render() {
    return (
      <Form onSubmit={this.handleFormSubmission}>
        <Form.Group widths="equal">
          <Form.Field
            type="text"
            name="contentOfComment"
            control={TextArea}
            value={this.state.contentOfComment}
            onChange={this.handleInputChange}
            placeholder="Insert comment here..."
            autoComplete="off"
          />
        </Form.Group>
        <div className="add__comment">
          <button>Add Comment</button>
        </div>
      </Form>
    );
  }
}

export default commentInput;
