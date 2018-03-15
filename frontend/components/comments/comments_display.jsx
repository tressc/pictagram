import React from 'react';

const CommentsDisplay = ({comments, ids, users}) => {

  const imgComments = ids.slice().reverse().map(id => {
    return <div key={id} className="ind_comment">
      <span className="comment_author">{users[comments[id].user_id].username}</span>
      <span>{comments[id].body}</span>
    </div>
  })
  return (
    <div>
      {imgComments}
    </div>
  );
};

export default CommentsDisplay;
