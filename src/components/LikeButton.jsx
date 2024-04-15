import React from 'react'

const LikeButton = ({ onClick, likes }) => (
    <button onClick={onClick}>
      Like <span>{likes}</span>
    </button>
  );

export default LikeButton