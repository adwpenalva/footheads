import React from 'react';
import './style.scss';

const commentsList = props => {
  console.log('inside comments herererere', props.comments);
  return (
    <div className="">
      {props.comments &&
        props.comments.map(comment => {
          if (props.user._id === comment.author._id) {
            return (
              <div className="commentBox">
                <div className="commentSingle">
                  <img src="#" alt="Users " />
                  <div className="commentTitle">
                    <h6>{comment.author.name}</h6>
                    <small>{comment.creationDate.substring(0, 10)}</small>
                  </div>
                  <p key={comment._id}>{comment.content}</p>
                  <button onClick={() => props.removeComment(comment._id)}>delete</button>
                </div>
              </div>
            );
          } else if (props.user._id === comment.author) {
            return (
              <div className="commentBox">
                <div className="commentSingle">
                  <img src="#" alt="Users " />
                  <div className="commentTitle">
                    <h6>{comment.author.name}</h6>
                    <small>Time</small>
                  </div>
                  <p key={comment._id}>{comment.content}</p>
                  <button onClick={() => props.removeComment(comment._id)}>delete</button>
                </div>
              </div>
            );
          } else {
            return (
              <div className="commentBox">
                <div className="commentSingle">
                  <img src="#" alt="Users " />
                  <div className="commentTitle">
                    <h6>{comment.author.name}</h6>
                    <small>Time</small>
                  </div>
                  <p key={comment._id}>{comment.content}</p>
                </div>
              </div>
            );
          }
        })}
    </div>
  );
};

export default commentsList;
