import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const commentsList = props => {
  console.log('inside comments herererere', props.comments);
  return (
    <div className="">
      {props.comments &&
        props.comments.map(comment => (
          <div className="club__comment__box">
            {/* {JSON.stringify(comment, null, 2)} */}
            <div className="club__comment__single">
              <img src={comment.author.picture} alt="Users " />
              <div className="club__comment__title">
                {(props.user._id !== comment.author._id && (
                  <Link to={`/user/${comment.author._id}`}>
                    <h6>{comment.author.name}</h6>
                  </Link>
                )) || <h6>{comment.author.name}</h6>}
                <small>{comment.creationDate.substring(0, 10)}</small>
              </div>
              <p key={comment._id}>{comment.content}</p>
              {props.user._id === comment.author._id && (
                <button onClick={() => props.removeComment(comment._id)}>Delete</button>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default commentsList;
