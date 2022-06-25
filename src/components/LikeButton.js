import { useState } from 'react';

function LikeButton() {
  const [like, setLike] = useState(0);
  const [state, setState] = useState(0);
 /*  const increaseLikes = () => {
    setLike(like + 1);
  };

  const secondLikesIncrease = () => {
    setState(state + 1);
  }; */

  /* Given that the functions are the same, you could have only 1 but dynamic */

  const likesIncrease = (number) => {
    if (number === 1) {
      setLike(like + 1);
    } else {
      setState(state + 1);
    }
  };
  

  return (
    <div className="likeButton">
      <button onClick={() => likesIncrease(1)}>{like} Likes</button>
      <button onClick={() => likesIncrease(2)}>{state} Likes</button>
    </div>
  );
}

export default LikeButton;
