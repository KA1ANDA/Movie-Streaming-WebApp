import React, { memo, useEffect, lazy, Suspense } from 'react';

import { useDispatch } from 'react-redux';
import { useGetMyAccountInfoQuery } from '../../Redux/API/api';
import Main from '../Main/Main';
import NewMoviesSlider from '../JustRealeseMovies/NewMoviesSlider';
import TrendingMoviesSlider from '../TrendingMovies/TrendingMoviesSlider';
import TopRaitedMovies from '../TopRaited/TopRaitedMovies';
import Movies from '../CommonSlides/Movies';
import TvSeries from '../CommonSlides/TvSeries';
import Genres from '../Genres/Genres';
import { setProfileId } from '../../Redux/Slices/profileSlice';

// const Main = lazy(()=> import('../Main/Main'))
// const NewMoviesSlider = lazy(()=> import('../JustRealeseMovies/NewMoviesSlider'))
// const TrendingMoviesSlider = lazy(()=> import('../TrendingMovies/TrendingMoviesSlider'))
// const TopRaitedMovies = lazy(()=> import('../TopRaited/TopRaitedMovies'))
// const Movies = lazy(()=> import('../CommonSlides/Movies'))
// const TvSeries = lazy(()=> import('../CommonSlides/TvSeries'))







const HomePage = memo(() => {

  const dispatch = useDispatch()


  const {data , isLoading} = useGetMyAccountInfoQuery()





  useEffect(() => { 
    if (data) {
      dispatch(setProfileId(data.id));
    }
  }, [data , dispatch  ]);


  return (
      <div className="  bg-slate-500 px-[75px] pt-[40px] flex flex-col gap-[70px]">
          <Main/>     
          <NewMoviesSlider />        
          <TrendingMoviesSlider />
          <TopRaitedMovies />
          <Movies />
          <TvSeries />
          {/* <Genres />      */}
      </div>   
  );
})

export default HomePage;
