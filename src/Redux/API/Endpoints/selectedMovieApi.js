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

  

    getMovieMedia : builder.query({
      query: (movie_id) => `movie/${movie_id}/images?include_image_language=en&language=en`,
      providesTags: () => ["movieMedia"],
      
    }),
   
    
   
  })
})


export const {
  useGetFindByIdQuery ,
  useGetActorsQuery,
  useGetSimilarMoviesQuery,
  useGetMovieRecomendationQuery,
  useGetMovieReviewsQuery,
  useGetMovieMediaQuery} = selectedMovieApi