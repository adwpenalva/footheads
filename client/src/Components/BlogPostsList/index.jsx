import React from 'react';

const BlogPostsList = props => {
  return (
    <ul>
      {props.posts.map(post => (
        <li key={post.id}>
          {post.content}
          <button onClick={() => props.removePost(post.id)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default BlogPostsList;
