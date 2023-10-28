import React, { memo, useEffect, useState } from 'react';
import {useGetPersonCreditsQuery, useGetPersonInformationQuery } from '../../../Redux/API/Endpoints/peopleApi';
import PersonalInfo from './PersonalInfo';
import { useSelector } from 'react-redux';
import KnownForMovies from './KnownForMovies';
import PersonHistory from './PersonHistory';





const SelectedPersonPage = memo(() => {

  const {personId} = useSelector(state => state.peopleSlice)
  const [swiperToggle , setSwiperToggle] = useState('movie')


  const {data} = useGetPersonInformationQuery(personId) 
  const credits = useGetPersonCreditsQuery(personId)

  const actingMovies = credits.data?.cast.filter( movie => movie.media_type==='movie')
  const actingSeries = credits.data?.cast.filter( movie => movie.media_type==='tv')
  const productionMovies = credits.data?.crew.filter( movie => movie.media_type==='movie')
  const productionSeries= credits.data?.crew.filter( movie => movie.media_type==='tv')






  const getReleaseYear = (release_date) => {
    return new Date(release_date).getFullYear();
  };

  const toggleMovie = () =>{
    setSwiperToggle('movie')
  }

  const toggleTV = () =>{
    setSwiperToggle('tv')
  }
  

  const movies = actingMovies?.sort((a, b) => {
    const yearA = getReleaseYear(a.release_date);
    const yearB = getReleaseYear(b.release_date);
  
    return yearB - yearA;
  })

  const series = actingSeries?.sort((a, b) => {
    const yearA = getReleaseYear(a.first_air_date);
    const yearB = getReleaseYear(b.first_air_date);
  
    return yearB - yearA;
  })


  const prodMovies = productionMovies?.sort((a, b) => {
    const yearA = getReleaseYear(a.release_date);
    const yearB = getReleaseYear(b.release_date);
  
    return yearB - yearA;
  })

  const prodSeries = productionSeries?.sort((a, b) => {
    const yearA = getReleaseYear(a.release_date);
    const yearB = getReleaseYear(b.release_date);
  
    return yearB - yearA;
  })


  useEffect(()=>{
    if(movies?.length==[]){
      setSwiperToggle('tv')
    }
  },[movies])
  


  console.log(movies)
  return (
      <div className="bg-green-500 px-[75px] mt-[150px] flex gap-[100px]">
        {data && credits && movies &&

        <>
        <PersonalInfo  data={data} />
        
        <div  className='grid grid-cols-1 grid-rows-3 '>
          <div>{data.name}</div>
          <div>{data.biography}</div>
          <div>
            <div className='flex'>
              Known For
              <div onClick={toggleMovie}>Movies</div>
              <div onClick={toggleTV}>TV Series</div>
            </div>
            <KnownForMovies knownFor={swiperToggle === 'movie' ? movies?.slice(0,12) : series?.slice(0,12)}/>
          </div>
          
          <div>

            {movies.length>0 && 
            <>
              <div>Acting Movies</div>
              <div>
                {movies?.map(acting =><PersonHistory acting={acting}/>)}
              </div>
            </>
            }
            


            {series.length>0 && 
            <>
              <div>Acting Series</div>
              <div>
                {series?.map(acting =><PersonHistory acting={acting}/>)}
              </div>
            </>
            }
            

            {prodMovies.length>0 && 
            <>
              <div>Production Movies</div>
              <div>
                {prodMovies?.map(acting =><PersonHistory acting={acting}/>)}
              </div>
            </>
            }
           
            
            {prodSeries.length>0 &&
            <>
              <div>Production TV</div>
              <div>
                {prodSeries?.map(acting =><PersonHistory acting={acting}/>)}
              </div>
            </>
            }
           
          </div>
        
        </div>
        </>
       
        }
        
      </div>   
  );
})

export default SelectedPersonPage;
