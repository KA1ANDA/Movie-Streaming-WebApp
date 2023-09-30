import React from 'react';
import { useGetPopularMoviesQuery } from './Redux/api';
import Main from './components/Main/Main';


function App() {

 

  return (
    <div className="  bg-slate-500 px-[75px] py-[40px]">
      <Main/>
      
    </div>
  );
}

export default App;
