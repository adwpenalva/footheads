import React from 'react';

const commentsList = props => {
  console.log('inside comments', props);
  return (
    <ul>
      {props.comments &&
        props.comments.map(comment => (
          <li key={comment._id}>
            {comment.content}
            <button onClick={() => props.removeComment(comment._id)}>X</button>
          </li>
        ))}
    </ul>
  );
};

export default commentsList;
