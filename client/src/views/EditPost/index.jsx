import React, { Component } from 'react';
import { Button, Form, Input, Select, TextArea } from 'semantic-ui-react';
import { findPost } from './../../services/post';
import { editPost } from './../../services/post';

const options = [
  { text: 'In-game', value: 'In-game' },
  { text: 'In the stands', value: 'In the stands' },
  { text: 'At the pub', value: 'At the pub' },
  { text: 'At home', value: 'At home' },
  { text: 'Other', value: 'Other' }
];

export class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeOfExperience: '',
      content: ''
    };
    //this.handleFormEdition = this.handleFormEdition.bind(this);
    this.handleOptionsChange = this.handleOptionsChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.getPostInfo = this.getPostInfo.bind(this);
    this.editPostInfo = this.editPostInfo.bind(this);
  }

  componentDidMount() {
    console.log('the props', this.props.match.params.postId);
    this.getPostInfo(this.props.match.params.postId);
  }

  async editPostInfo(event) {
    event.preventDefault();
    try {
      const newEditPost = await editPost(
        this.props.match.params.postId,
        this.state.content,
        this.state.typeOfExperience
      );
      console.log('Edited post', newEditPost);
      this.props.history.push('/blog');
    } catch (error) {
      console.log(error);
    }
  }

  async getPostInfo(id) {
    const post = await findPost(id);
    console.log('found post', post);
    this.setState({
      typeOfExperience: post.typeOfExperience,
      content: post.content
    });
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

  //  async handleFormEdition(e) {
  //     e.preventDefault();
  //     const content = this.state.content;
  //     const typeOfExperience = this.state.typeOfExperience;
  //     const editedPost = {
  //       content,
  //       typeOfExperience
  //     };
  //     this.setState({ editedPost });
  //   }

  render() {
    console.log('the state', this.state);
    return (
      <div>
        <Form onSubmit={this.editPostInfo}>
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
            Update your experience
          </Form.Field>
        </Form>
      </div>
    );
  }
}

export default EditPost;
