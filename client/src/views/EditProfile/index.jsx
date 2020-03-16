import React, { Component } from 'react';
import './style.scss';
export class EditProfileView extends Component {
  render() {
    return (
      <div>
        <figure>
          <img src="" alt="" />
        </figure>
        <form>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" placeholder="Name" />
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="Email" />
          <label htmlFor="picture">Profile Picture</label>
          <input type="file" id="picture" name="picture" />
          <button>Update Profile</button>
        </form>
      </div>
    );
  }
}

export default EditProfileView;
