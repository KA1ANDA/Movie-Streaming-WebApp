import { api } from "../api";

const peopleApi = api.injectEndpoints({ 
  endpoints:(builder) => ({
    
    getPeople: builder.query({
      query: (page) => `person/popular?language=en-US&page=${page}`,
      providesTags: () => ["people"],
      
    }),

    getPersonInformation: builder.query({
      query: (person_id) => `person/${person_id}`,
      providesTags: () => ["people"],
      
    }),

    getPersonCredits: builder.query({
      query: (person_id) => `/person/${person_id}/combined_credits`,
      providesTags: () => ["people"],
      
    }),

    getSearchedPerson: builder.query({
      query: ({value , page}) => `search/person?query=${value}&include_adult=false&language=en-US&page=${page}`,
      providesTags: () => ["people"],
      
    }),


   

    
    
  })
})


export const {
 useGetPeopleQuery,
 useGetPersonInformationQuery,
 useGetPersonCreditsQuery,
 useGetSearchedPersonQuery} = peopleApi