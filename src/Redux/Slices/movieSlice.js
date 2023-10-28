import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name:"movieSlice",
  initialState:{
    genreId:null,
    movieId:null,
    tvId:null,
    listType:'movie',
    watchTrailerToggle:false,
    trailerKey:'',
    searchToggle:false,
   
    
  },
  reducers:{
    setGenreId: (state , action) => {
      state.genreId = action.payload
    } ,
    setMovieId: (state , action) => {
      state.movieId = action.payload
      
    } ,
    setTvId: (state , action) => {
      state.tvId = action.payload
  
    } ,

    setListType: (state , action) => {
      state.listType = action.payload
  
    } ,
    setWatchTrailerToggle: (state , action) => {
      state.watchTrailerToggle = action.payload
    } ,

    setTrailerKey: (state , action) => {
      state.trailerKey = action.payload
    } ,

    setSearchToggle: (state , action) => {
      state.searchToggle = action.payload
    } ,
    
    
  }
})

export const {setGenreId , setMovieId , setWatchTrailerToggle , setTrailerKey , setTvId , setListType , setSearchToggle} = movieSlice.actions
export default movieSlice.reducer