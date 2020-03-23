import React from 'react';
import './style.scss';

const commentsList = props => {
  console.log('inside comments herererere', props.comments);
  return (
    <div className="">
      {props.comments &&
        props.comments.map(comment => (
          <div className="club__comment__box">
            <div className="club__comment__single">
              <img src={props.user.picture} alt="Users " />
              <div className="club__comment__title">
                <h6>{comment.author.name}</h6>
                <small>{comment.creationDate.substring(0, 10)}</small>
              </div>
              <p key={comment._id}>{comment.content}</p>
              {props.user._id === comment.author._id && (
                <button onClick={() => props.removeComment(comment._id)}>delete</button>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default commentsList;
