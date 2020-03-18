import React, { Component } from 'react';
import BlogPostsList from './../../Components/BlogPostsList';
import BlogPosting from './../../Components/BlogPosting';
export class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.handlePostAddition = this.handlePostAddition.bind(this);
    this.handlePostRemoval = this.handlePostRemoval.bind(this);
  }

  handlePostAddition(post) {
    this.setState(previousState => ({
      posts: [...previousState.posts, post]
    }));
  }

  handlePostRemoval(id) {
    const remainingPosts = this.state.posts.filter(post => post.id !== id);
    this.setState({
      posts: remainingPosts
    });
  }
  render() {
    return (
      <div>
        <BlogPosting addPost={this.handlePostAddition} />
        <BlogPostsList posts={this.state.posts} removePost={this.handlePostRemoval} />
      </div>
    );
  }
}

export default Blog;
