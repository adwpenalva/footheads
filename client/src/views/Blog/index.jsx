import React, { Component } from 'react';
import './style.scss';

import BlogPostsList from './../../Components/BlogPostsList';
import BlogPosting from './../../Components/BlogPosting';

import { createPost } from './../../services/post';
import { listPosts } from './../../services/post';
import { deletePost } from './../../services/post';
import { Link } from 'react-router-dom';

export class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeOfExperience: null,
      posts: []
    };
    this.handlePostAddition = this.handlePostAddition.bind(this);
    this.handlePostRemoval = this.handlePostRemoval.bind(this);
    this.postFinder = this.postFinder.bind(this);
  }

  componentDidMount() {
    this.postFinder();
  }

  async postFinder() {
    try {
      const post = await listPosts();
      console.log('got Post finder', post);
      this.setState({
        posts: post
      });
    } catch (error) {
      console.log(error);
    }
  }

  async handlePostAddition(post) {
    console.log(this.props);
    const mockPost = {
      author: this.props.user._id,
      typeOfExperience: post.typeOfExperience,
      content: post.content
    };

    try {
      const postDone = await createPost(mockPost);
      console.log('post created', postDone);
      this.setState({
        posts: [postDone.post, ...this.state.posts]
      });
    } catch (error) {
      console.log(error);
      console.log('Error in creating post.');
    }
  }

  async handlePostRemoval(id) {
    const remainingPosts = this.state.posts.filter(post => post._id !== id);
    this.setState({
      posts: remainingPosts
    });
    try {
      const postDeleted = await deletePost(id);
      console.log('post deleted', postDeleted);
    } catch (error) {
      console.log(error);
      console.log('Error in service.');
    }
  }

  render() {
    return (
      <div className="blog__container">
        <div className="blog__background"></div>
        <div className="blog">
          {(this.props.user && (
            <div>
              {this.props.user && <BlogPosting addPost={this.handlePostAddition} />}
              {this.props.user && (
                <BlogPostsList
                  posts={this.state.posts}
                  removePost={this.handlePostRemoval}
                  user={this.props.user}
                />
              )}
            </div>
          )) || (
            <div className="blog__unauthorized">
              <h3>Want to receive access to blogs, comments, predictions and much more?</h3>
              <h5>Sign up for free and get exclusive access to all these features...</h5>
              <p>
                Its very simple, click <Link to="/sign-up">here</Link> to go to the Sign-Up page.
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Blog;
