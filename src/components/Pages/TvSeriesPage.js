import React, { memo, useState } from 'react';
import { useGetFindByIdTvQuery, useGetSimilarTvQuery, useGetTvActorsQuery, useGetTvMediaQuery, useGetTvRecomendationQuery, useGetTvReviewsQuery } from '../../Redux/API/Endpoints/tvSeriesApi';
import { useDispatch, useSelector } from 'react-redux';
import Actors from '../SelectedMovie/Actors';
import { setWatchTrailerToggle } from '../../Redux/Slices/movieSlice';
import SelectedMovie from '../SelectedMovie/SelectedMovie';
import MovieReview from '../SelectedMovie/MovieReview';
import MediaSwiper from '../SelectedMovie/MovieMedia/MediaSwiper';
import CommonSlide from '../Slides/CommonSlide';





const TvSeriesPage = memo(() => {
  const dispatch = useDispatch()
  const [toggle , setToggle] = useState('backdrops')
  // const {movieId , watchTrailerToggle , trailerKey} = useSelector(state => state.movieSlice)
  // const {data} = useGetFindByIdQuery(movieId)
  // const actors = useGetActorsQuery(movieId)
  // const recomendation = useGetMovieRecomendationQuery(movieId)
  // const similarMovies = useGetSimilarMoviesQuery(movieId)
  // const review = useGetMovieReviewsQuery(movieId)
  // const movieMedia = useGetMovieMediaQuery(movieId)

  const {tvId , watchTrailerToggle , trailerKey} = useSelector(state => state.movieSlice)
  const {data} = useGetFindByIdTvQuery(tvId)
  const actors = useGetTvActorsQuery(tvId)
  const recomendation = useGetTvRecomendationQuery(tvId)
  const similarTv = useGetSimilarTvQuery(tvId)
  const review = useGetTvReviewsQuery(tvId)
  const tvMedia = useGetTvMediaQuery(tvId)


 
  
  


  const togglePoster = () => {
    setToggle('backdrops')
  }

  const toggleBackdrops = () => {
    setToggle('posters')
  }

  const closeVideo = () => {
    dispatch(setWatchTrailerToggle(false))
  }

  return (
    <div className="  bg-slate-500 px-[75px]  flex flex-col gap-[70px] relaive">
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
            <MediaSwiper data={tvMedia.data?.backdrops}/>
            :
            <MediaSwiper data={tvMedia.data?.posters}/>
          }
        </div>
        <div>
          <div>Similar Movies for you</div>
          <CommonSlide data={similarTv?.data}/>
          <div>Recomendation</div>
          {recomendation.data?.results.length>0  ? 
            <CommonSlide data={recomendation?.data}/>
            :
            <div>We don't have enough data to suggest any movies based on "{data.title}". You can help by rating movies you've seen.</div>
          }
          
        </div>

        {watchTrailerToggle && (
        <div onClick={closeVideo} className='fixed   bg-[rgb(0,0,0,0.8)]   top-0 bottom-0 right-0 left-0 w-full h-full px-[75px] py-[75px]  z-50 '>
          <div className=' m-auto   h-[100%] w-full '>
            {/* <video className='w-full h-full' src={`https://www.youtube.com/watch?v=${trailerKey}`}></video>
             */}
            <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${trailerKey}`} title="YouTube video player" frameborder="0" ></iframe>
             
          </div>
        </div>
        )}
        
      </>
    
        
      }
      
    </div>   
  );
})

export default TvSeriesPage;
