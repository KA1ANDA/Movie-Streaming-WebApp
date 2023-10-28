import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name:"peopleSlice",
  initialState:{
    personId:null,
    peopleResults:[],
    newPeopleResults:[],
    searchResult:[],
    newSearchResult:[],
    searchPage:1

  },
  reducers:{
   
    setPeopleResults: (state , action) => {
    
      state.peopleResults = action.payload 
      

      if(!state.peopleResults==[]){
        if(action.payload===state.peopleResults){
          state.newPeopleResults = [...state.newPeopleResults, ...state.peopleResults];
        }else{
          state.newPeopleResults=[]
          state.newPeopleResults = [...state.newPeopleResults, ...state.peopleResults];
        }
       
      } 

  
        
    } ,

    setResetPeopleResults:(state , action) =>{
      state.newPeopleResults=[]
      state.peopleResults=[]
    },


    setPersonId:(state , action) =>{
      state.personId = action.payload
    },

    setSearchPage:(state , action) =>{
      state.searchPage = action.payload
    },

    setSearchResult:(state , action) =>{ 
      state.searchResult = action.payload
      if(!state.searchResult==[]){
          state.newSearchResult = [...state.searchResult];
        }
      
    },
    
  }
})

export const { setPeopleResults , setResetPeopleResults , setPersonId , setSearchResult  , setSearchPage} = peopleSlice.actions
export default peopleSlice.reducer