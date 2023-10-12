import { api } from "../api";

const selectedMovieApi = api.injectEndpoints({ 
  endpoints:(builder) => ({
    
    getFindById: builder.query({
      query: (movie_id) => `movie/${movie_id}`,
      providesTags: () => ["movie"],
      
    }),

    getActors: builder.query({
      query: (movie_id) => `/movie/${movie_id}/credits`,
      providesTags: () => ["actors"],
      
    }),

    getSimilarMovies: builder.query({
      query: (movie_id) => `movie/${movie_id}/similar`,
      providesTags: () => ["similarMovies"],
      
    }),

    getMovieRecomendation: builder.query({
      query: (movie_id) => `movie/${movie_id}/recommendations`,
      providesTags: () => ["movieRecomendation"],
      
    }),

    getMovieReviews: builder.query({
      query: (movie_id) => `movie/${movie_id}/reviews`,
      providesTags: () => ["movieReviews"],
      
    }),

    
   
  })
})


export const {
  useGetFindByIdQuery ,
  useGetActorsQuery,
  useGetSimilarMoviesQuery,
  useGetMovieRecomendationQuery,
  useGetMovieReviewsQuery} = selectedMovieApi