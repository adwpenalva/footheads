import React from 'react';
import './style.scss';

const BlogPostsList = props => {
  return (
    <ul>
      {props.posts &&
        props.posts.map(post => (
          <li key={post._id}>
            {post.typeOfExperience}
            {post.content}
            <button onClick={() => props.removePost(post._id)}>X</button>
          </li>
        ))}
    </ul>
  );
};

export default BlogPostsList;
