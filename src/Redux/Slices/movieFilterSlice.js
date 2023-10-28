import { createSlice } from "@reduxjs/toolkit";

const movieFilterSlice = createSlice({
  name:"movieFilterSlice",
  initialState:{
    sortOption:'',
    filterParams:{},
    movieResults:[],
    newMovieResults:[]
  },
  reducers:{
    setSortOption: (state , action) => {
      state.sortOption = action.payload
    } ,
    setFilterParams: (state , action) => {
      state.filterParams = action.payload
    } ,
    setMovieResults: (state , action) => {
      state.movieResults = action.payload
      if(!state.movieResults==[]){
        state.newMovieResults = [...state.newMovieResults, ...state.movieResults];
      }
    } ,
    setResetMovieResults:(state , action) =>{
      state.movieResults= []
      state.newMovieResults = []
    }
  }
})

export const { setSortOption , setFilterParams , setMovieResults , setResetMovieResults} = movieFilterSlice.actions
export default movieFilterSlice.reducer