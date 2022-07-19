import { useState } from 'react';

const LikeButtonCompoent = () => {
  const [like, setLike] = useState(100),
    [isLike, setIsLike] = useState(false),
    onLikeButtonClick = () => {
      setLike(like + (isLike ? -1 : 1));
      setIsLike(!isLike);
    };

  return (
    <>
      <button
        className={"like-button " + (isLike ? "liked" : "")}
        onClick={onLikeButtonClick}
      >
       <span 
            className='likes-counter'> {`Like | ${like}`}
       </span>
      </button>
    </>
  );
};

export default LikeButtonCompoent;