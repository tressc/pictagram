import React from 'react';

const CommentsDisplay = ({comments, ids, users}) => {
  const imgComments = ids.slice().reverse().map(id => {
    return <li key={id}>
      <span>{comments[id].body}</span>
    </li>
  })
  return (
    <ul>
      {imgComments}
    </ul>
  );
};

export default CommentsDisplay;
