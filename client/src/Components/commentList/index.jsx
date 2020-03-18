import React from 'react';

const commentsList = props => {
  return (
    <ul>
      {props.comments &&
        props.comments.map(comment => (
          <li key={comment.id}>
            {comment.content}
            <button onClick={() => props.removeComment(comment.id)}>X</button>
          </li>
        ))}
      }
    </ul>
  );
};

export default commentsList;
