import React, { memo, useEffect, useState } from 'react';
import { useGetMovieFilteredQuery, useGetMovieGenresQuery } from '../../../Redux/API/api';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterParams, setMovieResults, setResetMovieResults } from '../../../Redux/Slices/movieFilterSlice';
import { useGetTvGenresQuery } from '../../../Redux/API/Endpoints/tvSeriesApi';
import { setListType } from '../../../Redux/Slices/movieSlice';






const Filters = memo(() => {

  const dispatch = useDispatch()
  const {listType} = useSelector(state => state.movieSlice)

  const [genreId , setGenreId] = useState(null)
  const [fromDate , setFromDate] = useState('')
  const [toDate , setToDate] = useState(new Date().toISOString().split('T')[0])
  const [userScore , setUserScore] = useState(10)
  const [userVotes , setUserVotes] = useState('')
  const [movieTime , setMovieTime] = useState(360)
  // const [listType , setListType] = useState('movie')

  



  const {data} = useGetMovieGenresQuery()
  const tvGenres = useGetTvGenresQuery()
 

  const getGenreId = (id) =>{
    setGenreId(id)

  }

  
  const params = {
    genreId ,
    fromDate,
    toDate,
    userScore,
    userVotes,
    movieTime,
    listType
  }

  useEffect(() => {
    dispatch(setFilterParams(params))
    dispatch(setResetMovieResults())
  },[dispatch , params])


  const fromDateChange = (event) => {
    const selectedValue = event.target.value;
    setFromDate(selectedValue);

  }

  const toDateChange = (event) => {
    const selectedValue = event.target.value;
    setToDate(selectedValue);

  }

  const scoreChange = (event) => {
    const selectedValue = event.target.value;
    setUserScore(selectedValue);

  }


  const voteChange = (event) => {
    const selectedValue = event.target.value;
    setUserVotes(selectedValue);

  }

  const timeChange = (event) => {
    const selectedValue = event.target.value;
    setMovieTime(selectedValue);

  }


  const setType = (event) => {
    const selectedValue = event.target.value;
    dispatch(setListType(selectedValue))
    setGenreId(null)
    setMovieTime(360)
    setUserScore(10)
    setFromDate('')
    setToDate(new Date().toISOString().split('T')[0])
  }

  
  

  
  return (
      <div className="bg-orange-500 flex flex-col gap-[50px]">
        <div className='flex flex-col '>
          <div>
            <label htmlFor='Movies'>Movies</label>
            <input onChange={setType} type='radio' value='movie' name='watch' id='Movies'></input>
          </div>
          <div>
            <label htmlFor='TV'>TV Series</label>
            <input onChange={setType} type='radio' value='tv' name='watch' id='TV'></input>
          </div>
          
          

        </div>
        <div className='flex flex-col'>
          <label>Release Dates</label>
          <label htmlFor='from'>from</label>
          <input onChange={fromDateChange} id='from' type='date' value={fromDate}></input>
          <label htmlFor='to'>to</label>
          <input onChange={toDateChange} value={toDate} id='to' type='date' ></input>
        </div>

        <div>
          <div>Genres</div>
          {listType ==='movie' ?

            data?.genres.map( genre => <div key={genre.id} onClick={() => getGenreId(genre.id)}>{genre.name}</div>)

            :

            tvGenres.data.genres.map( genre => <div key={genre.id} onClick={() => getGenreId(genre.id)}>{genre.name}</div>)
          
          }
        </div>

        <div>
          <div>User Score</div>
          <input min="0" max="10" value={userScore} onChange={scoreChange} step="1" type='range' list='rate'></input>
          <datalist id="rate">
            <option value="0" label="0"></option>            
            <option value="5" label="5"></option>            
            <option value="10" label="10"></option>
          </datalist>
          
        </div>
        <div>
          <div> Minimum User Votes </div>
          <input  min="0" max="500" value={userVotes} onChange={voteChange} step="50" type='range' list='vote'></input>
          <datalist id="vote">
            <option value="0" label="0"></option>            
            <option value="100" label="100"></option>            
            <option value="200" label="200"></option>
            <option value="300" label="300"></option>
            <option value="400" label="400"></option>
            <option value="500" label="500"></option>

          </datalist>
        </div>
        <div>
          <div>Runtime</div>
          <input min="0" max="360" value={movieTime} onChange={timeChange} step="15"type='range'  list='time'></input>
          <datalist id="time">
            <option value="0" label="0"></option>            
            <option value="120" label="120"></option>            
            <option value="240" label="240"></option>
            <option value="360" label="360"></option>
          </datalist>
        </div>
      </div>   
  );
})

export default Filters;
