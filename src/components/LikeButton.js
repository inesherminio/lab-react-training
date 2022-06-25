import { useState } from 'react';

function LikeButton() {
  const [like, setLike] = useState(0);
  const [state, setState] = useState(0);
  const increaseLikes = () => {
    setLike(like + 1);
  };

  const secondLikesIncrease = () => {
    setState(state + 1);
  };

  return (
    <div className="likeButton">
      <button onClick={increaseLikes}>{like} Likes</button>
      <button onClick={secondLikesIncrease}>{state} Likes</button>
    </div>
  );
}

export default LikeButton;
