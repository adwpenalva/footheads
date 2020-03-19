import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

const BlogPostsList = props => {
  return (
    <ul>
      {props.posts &&
        props.posts.map(post => {
          console.log('this should be post author', post.author);
          if (props.user._id === post.author._id) {
            return (
              <div>
                <li key={post._id}>
                  <h5>Type of experience: {post.typeOfExperience}</h5>
                  <br />
                  {post.content}
                  <button>
                    <Link to={`/edit-post/${post._id}`}>Edit post</Link>
                  </button>
                  <button onClick={() => props.removePost(post._id)}>X</button>
                  <br />
                  <small>Posted by: {post.author.name}</small>
                </li>
              </div>
            );
          } else if (props.user._id === post.author) {
            return (
              <div>
                <li key={post._id}>
                  <h5>Type of experience: {post.typeOfExperience}</h5>
                  <br />
                  {post.content}
                  <button>
                    <Link to={`/edit-post/${post._id}`}>Edit post</Link>
                  </button>
                  <button onClick={() => props.removePost(post._id)}>X</button>
                  <br />
                  <small>Posted by: {post.author.name}</small>
                </li>
              </div>
            );
          } else {
            return (
              <li key={post._id}>
                <h5>Type of experience: {post.typeOfExperience}</h5>
                <br />
                {post.content}
                <br />
                <small>Posted by: {post.author.name}</small>
              </li>
            );
          }
        })}
    </ul>
  );
};

export default BlogPostsList;
