import React, { memo } from 'react';
import SelectedMovie from '../SelectedMovie/SelectedMovie';
import { useGetActorsQuery, useGetFindByIdQuery, useGetMovieRecomendationQuery, useGetMovieReviewsQuery, useGetSimilarMoviesQuery } from '../../Redux/API/Endpoints/selectedMovieApi';
import { useSelector } from 'react-redux';
import Actors from '../SelectedMovie/Actors';
import CommonSlide from '../Slides/CommonSlide';
import MovieReview from '../SelectedMovie/MovieReview';




const MoviePage = memo(() => {
  const {movieId} = useSelector(state => state.movieSlice)
  const {data} = useGetFindByIdQuery(movieId)
  const actors = useGetActorsQuery(movieId)
  const recomendation = useGetMovieRecomendationQuery(movieId)
  const similarMovies = useGetSimilarMoviesQuery(movieId)
  const review =useGetMovieReviewsQuery(movieId)

  console.log(review)

  return (
    <div className="  bg-slate-500 px-[75px]  flex flex-col gap-[70px]">
      {data && actors &&
      <>
        <SelectedMovie  movie={data}/>
        <Actors  actors={actors.data?.cast.slice(0,15)}/>
        <div>
          <div className='flex'>
            <div>Social</div>
            <div>Reviews {review.data?.total_results}</div>
            <div> Discussions</div>
          </div>
          {review.data?.results.map(review => <MovieReview  review={review}/> )}
          

        </div>
        <div>
          <div>Similar Movies for you</div>
          <CommonSlide data={similarMovies?.data}/>
          <div>Recomendation</div>
          {recomendation.data?.results.length>0  ? 
            <CommonSlide data={recomendation?.data}/>
            :
            <div>We don't have enough data to suggest any movies based on The Equalizer 3. You can help by rating movies you've seen.</div>
          }
          
        </div>
      </>
    
        
      }
      
    </div>   
  );
})

export default MoviePage;
