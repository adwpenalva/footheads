import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

const BlogPostsList = props => {
  return (
    <div>
      {props.posts &&
        props.posts.map(post => {
          console.log('this should be post author', post.author);
          if (props.user._id === post.author._id) {
            return (
              <div className="blogBox">
                <div className="blogSingle" key={post._id}>
                  <h5>
                    <i>Type of experience:</i> {post.typeOfExperience}
                  </h5>
                  <div className="blog-personnel">
                    <img src={props.user.picture} alt="Users " />
                    <small>Posted by: {post.author.name}</small>
                  </div>
                  <p>{post.content}</p>
                  <div className="blog-buttons">
                    <button>
                      <Link to={`/edit-post/${post._id}`}>Edit Blog</Link>
                    </button>
                    <button onClick={() => props.removePost(post._id)}>Delete Blog</button>
                  </div>
                  <br />
                </div>
              </div>
            );
          } else if (props.user._id === post.author) {
            return (
              <div>
                <p key={post._id}>
                  <h5>Type of experience: {post.typeOfExperience}</h5>
                  <br />
                  {post.content}
                  <button>
                    <Link to={`/edit-post/${post._id}`}>Edit post</Link>
                  </button>
                  <button onClick={() => props.removePost(post._id)}>X</button>
                  <br />
                  <small>Posted by: {post.author.name}</small>
                </p>
              </div>
            );
          } else {
            return (
              <p key={post._id}>
                <h5>Type of experience: {post.typeOfExperience}</h5>
                <br />
                {post.content}
                <br />
                <small>Posted by: {post.author.name}</small>
              </p>
            );
          }
        })}
    </div>
  );
};

export default BlogPostsList;
