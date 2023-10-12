import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './ganresSwiper.css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import { useGetFindByGenresQuery, useGetMovieGenresQuery } from '../../Redux/API/api';
import GenresSwiper from './GenresSwiper';
import { useSelector } from 'react-redux';
import VoteAndGenres from '../common/VoteAndGenres';



const Genres = memo(() => {

  const {genreId} = useSelector(state=> state.movieSlice)

  const [index , setIndex] = useState(0)
  // const [genreId , setGenreId] = useState(0)
  const [retry , setRetry] = useState(false)
  

  



  const {data} = useGetMovieGenresQuery()
  const findByGanres = useGetFindByGenresQuery(genreId)


  // const movieGenre = data?.genres[index]



  const indexIncrement = useCallback(() => {
    setIndex(index+1)
    if(index===data?.genres.length-1){
      setIndex(0)
    }
    setRetry(true)
    

  } )

  const indexDecrement = useCallback(() => {
    setIndex(index-1) 
    if(index===0){
      setIndex(data?.genres.length-1)
    }
    setRetry(true)
  })




  return (
    <div className=" h-[848px] bg-blue-400 flex relative">
      <div className='bg-green-400 '>
      <Swiper pagination={true}  navigation={true} modules={[Navigation , Pagination]} slidesPerView={'auto'} spaceBetween={20} >
      {data && findByGanres?.data?.results.map(movieFound =>
         <SwiperSlide  key={movieFound.id} >
            <img src={`https://image.tmdb.org/t/p/original/${movieFound.backdrop_path}`}/> 
            <div className='absolute bg-green-400'>
              <div>Explore by the genre</div>
              <div>{movieFound.title}</div>
              <VoteAndGenres  movie={movieFound} />
              <div>
                <button>play now</button>
                <button>add watch list</button>
              </div>

            </div>
         </SwiperSlide>)}  
         <div className='riightGradient '> </div> 
      </Swiper>
      </div>
      <div className='w-full h-[100px] self-end absolute'>
        <GenresSwiper genres={data} retry={retry} data={data} indexDecrement={indexDecrement}  indexIncrement={indexIncrement} index={index}/>
      </div>     
    </div>
  );
})

export default Genres;
