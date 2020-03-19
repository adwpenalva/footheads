import React from 'react';

const commentsList = props => {
  console.log('inside comments herererere', props);
  return (
    <ul>
      {props.comments &&
        props.comments.map(comment => {
          if (props.user._id === comment.author._id) {
            return (
              <div>
                <li key={comment._id}>{comment.content}</li>
                <button onClick={() => props.removeComment(comment._id)}>X</button>
              </div>
            );
          } else if (props.user._id === comment.author) {
            return (
              <div>
                <li key={comment._id}>{comment.content}</li>
                <button onClick={() => props.removeComment(comment._id)}>X</button>
              </div>
            );
          } else {
            return <li key={comment._id}>{comment.content}</li>;
          }
        })}
    </ul>
  );
};

export default commentsList;
