import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name:"movieSlice",
  initialState:{
    genreId:null,
    movieId:null,
    
  },
  reducers:{
    setGenreId: (state , action) => {
      state.genreId = action.payload
    } ,
    setMovieId: (state , action) => {
      state.movieId = action.payload
    } ,
    
  }
})

export const {setGenreId , setMovieId } = movieSlice.actions
export default movieSlice.reducer