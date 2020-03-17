import React, { Component } from 'react';

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
      <form onSubmit={this.handleFormSubmission}>
        <input
          type="text"
          name="contentOfComment"
          value={this.state.contentOfComment}
          onChange={this.handleInputChange}
          placeholder="Insert comment here..."
          autoComplete="off"
        />
        <button>Add Comment</button>
      </form>
    );
  }
}

export default commentInput;
