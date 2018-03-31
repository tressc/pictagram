import React from 'react';
import { Link } from 'react-router-dom';

const CommentsDisplay = ({comments, ids, users}) => {

  const imgComments = ids.slice().map(id => {
    return <div key={id} className="ind_comment">
      <Link to={`/users/${users[comments[id].user_id].id}`} className="comment_author">{users[comments[id].user_id].username}</Link>
      <span>{comments[id].body}</span>
    </div>;
  });
  return (
    <div>
      {imgComments}
    </div>
  );
};

export default CommentsDisplay;
