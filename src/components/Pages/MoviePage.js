import React, { memo, useState } from 'react';
import SelectedMovie from '../SelectedMovie/SelectedMovie';
import { useGetActorsQuery, useGetFindByIdQuery, useGetMovieBackdropsQuery, useGetMovieMediaQuery, useGetMoviePostersQuery, useGetMovieRecomendationQuery, useGetMovieReviewsQuery, useGetSimilarMoviesQuery } from '../../Redux/API/Endpoints/selectedMovieApi';
import { useSelector } from 'react-redux';
import Actors from '../SelectedMovie/Actors';
import CommonSlide from '../Slides/CommonSlide';
import MovieReview from '../SelectedMovie/MovieReview';
import MediaSwiper from '../SelectedMovie/MovieMedia/MediaSwiper';





const MoviePage = memo(() => {
  const [toggle , setToggle] = useState('backdrops')
  const {movieId} = useSelector(state => state.movieSlice)
  const {data} = useGetFindByIdQuery(movieId)
  const actors = useGetActorsQuery(movieId)
  const recomendation = useGetMovieRecomendationQuery(movieId)
  const similarMovies = useGetSimilarMoviesQuery(movieId)
  const review = useGetMovieReviewsQuery(movieId)
  const movieMedia = useGetMovieMediaQuery(movieId)

  console.log(movieMedia.data?.posters)
  const togglePoster = () => {
    setToggle('backdrops')
  }

  const toggleBackdrops = () => {
    setToggle('posters')
  }

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
          </div>
          {review.data?.results.map(review => <MovieReview  review={review}/> )}
        </div>
        <div className='flex flex-col'>
          <div className='flex'>
            <div>Media</div>
            <div onClick={togglePoster}> Backdrops </div>
            <div onClick={toggleBackdrops}> Posters </div>
          </div>
          {toggle==='backdrops' ? 
            <MediaSwiper data={movieMedia.data?.backdrops}/>
            :
            <MediaSwiper data={movieMedia.data?.posters}/>
          }
        </div>
        <div>
          <div>Similar Movies for you</div>
          <CommonSlide data={similarMovies?.data}/>
          <div>Recomendation</div>
          {recomendation.data?.results.length>0  ? 
            <CommonSlide data={recomendation?.data}/>
            :
            <div>We don't have enough data to suggest any movies based on "{data.title}". You can help by rating movies you've seen.</div>
          }
          
        </div>
      </>
    
        
      }
      
    </div>   
  );
})

export default MoviePage;
