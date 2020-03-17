import React, { Component } from 'react';
import { Button, Form, Input, Select, TextArea } from 'semantic-ui-react';
import './style.scss';
const options = [
  { text: 'In-game', value: 'In-game' },
  { text: 'In the stands', value: 'In the stands' },
  { text: 'At the pub', value: 'At the pub' },
  { text: 'At home', value: 'At home' },
  { text: 'Other', value: 'Other' }
];

class Blog extends Component {
  state = {};

  //handleChange = (e, { value }) => this.setState({ value });

  render() {
    //const { value } = this.state;
    return (
      <div>
        <h1>Blog</h1>
        <h6>
          Share an experience that you had during a football game, with various options of places
          and situations.
        </h6>
        <Form>
          <Form.Group widths="equal">
            <Form.Field control={Input} label="First name" placeholder="First name" />
            <Form.Field control={Input} label="Last name" placeholder="Last name" />
            <Form.Field
              control={Select}
              label="Type of experience"
              options={options}
              placeholder="Type of experience"
            />
          </Form.Group>
          <Form.Field
            control={TextArea}
            label="The experience itself"
            placeholder="Tell us more about your experience..."
          />
          <Form.Field className="button" control={Button}>
            Submit experience
          </Form.Field>
        </Form>
      </div>
    );
  }
}

export default Blog;
