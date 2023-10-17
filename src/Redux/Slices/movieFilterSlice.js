import { createSlice } from "@reduxjs/toolkit";

const movieFilterSlice = createSlice({
  name:"movieFilterSlice",
  initialState:{
    sortOption:'',
    filterParams:{},
  },
  reducers:{
    setSortOption: (state , action) => {
      state.sortOption = action.payload
    } ,
    setFilterParams: (state , action) => {
      state.filterParams = action.payload
    } ,
   
  }
})

export const { setSortOption , setFilterParams} = movieFilterSlice.actions
export default movieFilterSlice.reducer