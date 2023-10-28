import React, { useEffect, lazy, Suspense } from 'react';
import { useGetMyAccountInfoQuery } from './Redux/API/api';
import { useDispatch, useSelector } from 'react-redux';
import { setProfileId } from './Redux/Slices/profileSlice';
import { setGenres, setSearchToggle } from './Redux/Slices/movieSlice';
import Footer from './components/Footer/Footer';
import { Navigate, Route, Routes } from 'react-router-dom';
// import HomePage from './components/Pages/HomePage';
// import MoviePage from './components/Pages/MoviePage';
import NavList from './components/Main/NavList';
// import DiscoverPage from './components/Pages/DiscoverPage';
// import PeoplePage from './components/Pages/PeoplePage';
// import SelectedPerson from './components/Pages/SelectedPerson/SelectedPersonPage';
// import TvSeriesPage from './components/Pages/TvSeriesPage';
import Search from './components/Search/Search';

const HomePage = lazy(()=> import('./components/Pages/HomePage'))
const MoviePage = lazy(()=> import('./components/Pages/MoviePage'))
const TvSeriesPage = lazy(()=> import('./components/Pages/TvSeriesPage'))
const DiscoverPage = lazy(()=> import('./components/Pages/DiscoverPage'))
const PeoplePage = lazy(()=> import('./components/Pages/PeoplePage'))
const SelectedPerson = lazy(()=> import('./components/Pages/SelectedPerson/SelectedPersonPage'))







function App() {

  const dispatch = useDispatch()
  const {movieId , searchToggle} = useSelector(state => state.movieSlice)


  const {data , isLoading} = useGetMyAccountInfoQuery()


  const toggleSearch = (value) => {
    dispatch(setSearchToggle(value))
  }


  useEffect(() => { 
    if (data) {
      dispatch(setProfileId(data.id));
    }
  }, [data , dispatch  ]);


  return (
    <div className="  bg-slate-500   flex flex-col gap-[70px] relative">
      <NavList toggleSearch={toggleSearch}/>

      {searchToggle && 
        <div className='bg-[rgba(11,11,11,0.61)] fixed top-0 bottom-0 left-0 right-0 z-50 '>
          <div onClick={()=>toggleSearch(false)}  className=' cursor-pointer flex justify-end text-white  text-4xl'>X</div>
          <Search/>
        </div>
      }
      
      
      <Suspense fallback={<div className='bg-yellow-500 w-full h-[400px]'>Loading.....Loading.....Loading.....Loading.....</div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<HomePage />}></Route>
          
          <Route path="/Movie" element={<MoviePage />}></Route> 
          :
          <Route path="/tv" element={<TvSeriesPage />}></Route> 
          
          
          <Route path="/Discover" element={<DiscoverPage />}></Route>
          <Route path="/People"  element={<PeoplePage />}></Route>
          <Route path="/People/actor"  element={<SelectedPerson />}></Route>

        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
