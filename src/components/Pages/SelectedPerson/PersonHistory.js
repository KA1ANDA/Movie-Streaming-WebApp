import React, {memo, useState} from 'react';






const PersonHistory = memo(({acting}) => {

  const [toggle , setToggle] = useState(false)


  return (
    
       <div className='flex gap-[50px] bg-slate-200 m-2 relative items-center'>
          <div>{new Date(acting.release_date ? acting.release_date :  acting.first_air_date).getFullYear()}</div>
          {/* <div onClick={()=> setToggle(!toggle)} className='w-[5px] h-[5px] bg-purple-600 rounded-[50%]'></div> */}
          <span className={`rounded-[50%] w-[10px] h-[10px] bg-white ${toggle && 'bg-green-600' }`}  onClick={() => setToggle(!toggle)}></span>

          {toggle && 
            <div className='bg-red-500 absolute -top-[280px] grid grid-cols-2 w-[534px]'>
              <div className='w-[150px] z-50'>
                <img src={`https://image.tmdb.org/t/p/original/${acting.poster_path}` }/>
              </div>
              <div className='grid grid-rows-3'>
                <div>
                  <div>{acting.title ? acting.title : acting.name}</div>
                  <div>{acting.vote_average}</div>
                </div>
                <div className='h-[45px]  bg-orange-500 truncate'>{acting.overview}</div>
                <div>
                  <button>Like</button>
                  <button>Watchlist</button>
                  <button>Rate</button>
                </div>
              </div>
            </div>
          }

          <div>
            <div>{acting.title ? acting.title : acting.name}</div>
            <div>{acting.character ? `as ${acting.character}` : ''}</div>
            {acting.job && <div>as {acting.job} </div>}
          </div>
        </div> 
  );
})

export default PersonHistory;
