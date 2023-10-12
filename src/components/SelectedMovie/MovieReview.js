import React, { memo } from 'react';





const MovieReview = memo(({review}) => {

  return (
      <div className="  ">
        <div>
          <img src={`https://image.tmdb.org/t/p/w185/${review.author_details.avatar_path}`}/>
          <div>
            <div>A review by {review?.author}</div>
            <div>
              <div>{review?.rating}</div>
              Written by {review?.author} on {review?.created_at}
            </div>    
          </div>
        </div>
        <div>{review?.content}</div>    
      </div>   
  );
})

export default MovieReview;
